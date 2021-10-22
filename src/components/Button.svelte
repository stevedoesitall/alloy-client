<script>
	import { createEventDispatcher } from "svelte"
	export let disabled
	export let title
	export let params

	const dispatch = createEventDispatcher()

	let currentStatus
	let inProgress = false

	$: {
		if (currentStatus) {
			dispatch("handleStatus", { currentStatus, inProgress })
		}
	}

	const sendData = async () => {
		inProgress = true

		params.document_ssn = params.document_ssn.replaceAll("-", "")

		const data = await fetch("http://localhost:8081/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(params),
		})

		const response = await data.json()
		inProgress = false
		currentStatus = response.response.outcome
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
