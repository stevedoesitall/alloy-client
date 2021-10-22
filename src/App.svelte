<script>
	import Button from "./components/Button.svelte"
	import Input from "./components/Input.svelte"
	import inputObj from "../scripts/input-obj.js"
	import {
		validateEmail,
		validateString,
		validateZip,
		validatePhone,
		validateSSN,
	} from "../scripts/validation.js"

	let params = {
		name_first: "",
		name_last: "",
		address_line_1: "",
		address_line_2: "",
		address_city: "",
		address_state: "",
		address_postal_code: "",
		address_country_code: "US",
		document_ssn: "",
		email_address: "",
		birth_date: "",
		phone_number: "",
	}

	const autoInput = () => {
		params.name_first = "Steve"
		params.name_last = "Giordano"
		params.address_line_1 = "525 E. 82nd St."
		params.address_line_2 = "Apt 5A"
		params.address_state = "NY"
		params.address_city = "New York"
		params.address_postal_code = "10028"
		params.document_ssn = "111-22-3333"
		params.email_address = "stephenagiordano@gmail.com"
		params.birth_date = "1987-08-01"
		params.phone_number = "484-213-1320"
	}

	let buttonIsDisabled = true

	$: if (params) {
		console.log(inputObj)
		buttonIsDisabled = Object.values(params).some((val) => val === "")
	}

	let currentStatus
	let statusUpdated = false
	let inProgress = false

	const setIsDanger = (className, action = "add") => {
		if (action === "add") {
			document.querySelector(className).classList.add("is-danger")
		} else {
			document.querySelector(className).classList.remove("is-danger")
		}
	}

	const updateStatus = (event) => {
		const isValidEmail = validateEmail(params.email_address)
		const isValidFirstName = validateString(params.name_first)
		const isValidLastName = validateString(params.name_last)
		const isValidAddressOne = validateString(params.address_line_1)
		const isValidZip = validateZip(params.address_postal_code)
		const isValidPhone = validatePhone(params.phone_number)
		const isValidSSN = validateSSN(params.document_ssn)

		if (!isValidEmail) {
			setIsDanger("#email-input", "emailAddress", "add")
		} else {
			setIsDanger("#email-input", "emailAddress", "remove")
		}

		if (!isValidFirstName) {
			setIsDanger("#fn-input", "add")
		} else {
			setIsDanger("#fn-input", "remove")
		}

		if (!isValidLastName) {
			setIsDanger("#ln-input", "add")
		} else {
			setIsDanger("#ln-input", "remove")
		}

		if (!isValidAddressOne) {
			setIsDanger("#ad1-input", "add")
		} else {
			setIsDanger("#ad1-input", "remove")
		}

		if (!isValidZip) {
			setIsDanger("#zip-input", "add")
		} else {
			setIsDanger("#zip-input", "remove")
		}

		if (!isValidSSN) {
			setIsDanger("#ssn-input", "add")
		} else {
			setIsDanger("#ssn-input", "remove")
		}

		if (!isValidPhone) {
			setIsDanger("#phone-input", "add")
		} else {
			setIsDanger("#phone-input", "remove")
		}

		currentStatus = event.detail.currentStatus
		inProgress = event.detail.inProgress
		statusUpdated = true
	}
</script>

<main>
	<img alt="1st Bank of Hill Valley" src="./images/logo.png" />
</main>

<div id="credentials-form">
	<div class="column is-one-third">
		{#each Object.keys(inputObj) as key}
			<Input
				bind:params
				label={inputObj[key].label}
				id={inputObj[key].id}
				placeholder={inputObj[key].placeholder}
				value={inputObj[key].value}
				isDropdown={inputObj[key].isDropdown}
				isDate={inputObj[key].isDate}
				isDanger={inputObj[key].isDanger}
			/>
		{/each}
	</div>

	<div class="column is-one-third">
		{#if currentStatus === "Approved"}
			<article class="message is-success">
				<div class="message-header">
					<p>Success</p>
				</div>
				<div class="message-body">Your application was approved.</div>
			</article>
		{:else if currentStatus === "Manual Review"}
			<article class="message is-info">
				<div class="message-header">
					<p>In Review</p>
				</div>
				<div class="message-body">Your application is under manual review.</div>
			</article>
		{:else if currentStatus === "Denied"}
			<article class="message is-danger">
				<div class="message-header">
					<p>Warning</p>
				</div>
				<div class="message-body">Your application was denied.</div>
			</article>
		{:else if statusUpdated}
			<article class="message is-danger">
				<div class="message-header">
					<p>Error</p>
				</div>
				<div class="message-body">Something went wrong.</div>
			</article>
		{/if}

		{#if inProgress}
			<progress class="progress is-small is-primary" max="100">15%</progress>
		{/if}
	</div>

	<Button
		disabled={buttonIsDisabled}
		title="Submit"
		on:handleStatus={updateStatus}
		{params}
	/>

	<button class="has-text-weight-bold button is-secondary" on:click={autoInput}
		>Feeling Lazy?</button
	>
</div>

<style>
</style>
