<script>
	import { createEventDispatcher } from "svelte"
	import {
		validateEmail,
		validateString,
		validateZip,
		validatePhone,
		validateSSN,
	} from "../../scripts/validation.js"
	export let disabled
	export let title
	export let params

	const dispatch = createEventDispatcher()

	let currentStatus
	let inProgress = false
	let isValidForm = false

	$: {
		if (currentStatus) {
			dispatch("handleStatus", { currentStatus, inProgress })
		}
	}

	const setIsDanger = (idName, action = "add") => {
		if (action === "add") {
			document.querySelector(idName).classList.add("is-danger")
		} else {
			document.querySelector(idName).classList.remove("is-danger")
		}
	}

	const sendData = async () => {
		isValidForm = true
		const isValidEmail = validateEmail(params.email_address)
		const isValidFirstName = validateString(params.name_first)
		const isValidLastName = validateString(params.name_last)
		const isValidAddressOne = validateString(params.address_line_1)
		const isValidZip = validateZip(params.address_postal_code)
		const isValidPhone = validatePhone(params.phone_number)
		const isValidSSN = validateSSN(params.document_ssn)

		if (!isValidEmail) {
			isValidForm = false
			setIsDanger("#email-input", "add")
		} else {
			setIsDanger("#email-input", "remove")
		}

		if (!isValidFirstName) {
			isValidForm = false
			setIsDanger("#fn-input", "add")
		} else {
			setIsDanger("#fn-input", "remove")
		}

		if (!isValidLastName) {
			isValidForm = false
			setIsDanger("#ln-input", "add")
		} else {
			setIsDanger("#ln-input", "remove")
		}

		if (!isValidAddressOne) {
			isValidForm = false
			setIsDanger("#ad1-input", "add")
		} else {
			setIsDanger("#ad1-input", "remove")
		}

		if (!isValidZip) {
			isValidForm = false
			setIsDanger("#zip-input", "add")
		} else {
			setIsDanger("#zip-input", "remove")
		}

		if (!isValidSSN) {
			isValidForm = false
			setIsDanger("#ssn-input", "add")
		} else {
			setIsDanger("#ssn-input", "remove")
		}

		if (!isValidPhone) {
			isValidForm = false
			setIsDanger("#phone-input", "add")
		} else {
			setIsDanger("#phone-input", "remove")
		}

		inProgress = true

		params.document_ssn = params.document_ssn.replaceAll("-", "")

		if (isValidForm) {
			const data = await fetch("https://alloy-server.herokuapp.com/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(params),
			})

			if (data.status >= 400) {
				inProgress = false
				currentStatus = "Error"
				return true
			}

			const formInputs = document.querySelector("#form-inputs")
			const formButtons = document.querySelector("#form-buttons")
			const reloadButton = document.querySelector("#reload-button")
			const blurb = document.querySelector("#blurb")

			formInputs.classList.add("hidden")
			formButtons.classList.add("hidden")
			blurb.classList.add("hidden")
			reloadButton.classList.remove("hidden")

			const response = await data.json()
			inProgress = false
			currentStatus = response.response.outcome
		} else {
			inProgress = false
			currentStatus = "Has Errors"
		}
	}
</script>

<div class="content">
	<button
		{disabled}
		class="has-text-weight-bold button is-primary"
		on:click={sendData}
	>
		{title}
	</button>
</div>
