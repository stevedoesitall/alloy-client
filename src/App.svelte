<script>
	import Button from "./components/Button.svelte"
	import Input from "./components/Input.svelte"
	import inputObj from "../scripts/input-obj.js"

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
		const paramKeys = Object.keys(params)
		buttonIsDisabled = paramKeys.some(
			(key) => params[key] === "" && key !== "address_line_2"
		)
	}

	let currentStatus
	let statusUpdated = false
	let inProgress = false

	const updateStatus = (event) => {
		currentStatus = event.detail.currentStatus
		inProgress = event.detail.inProgress
		statusUpdated = true
	}

	const refresh = () => {
		window.location.reload()
	}
</script>

<main id="hero-image" class="column is-full">
	<img alt="1st Bank of Hill Valley" src="./images/logo.png" />
</main>

<article id="blurb" class="column is-full">
	<p class="is-size-4">
		Our investors literally go back in time to invest your money! Want to invest
		in Apple, Amazon, or Google for pennies on the dollar? You've come to the
		right bank.
	</p>
</article>

<div id="credentials-form">
	<div id="form-inputs" class="column is-full">
		{#each Object.keys(inputObj) as key}
			<Input
				bind:params
				label={inputObj[key].label}
				id={inputObj[key].id}
				placeholder={inputObj[key].placeholder}
				value={inputObj[key].value}
				isDropdown={inputObj[key].isDropdown}
				isDate={inputObj[key].isDate}
			/>
		{/each}
	</div>

	<div class="column is-full">
		{#if inProgress}
			<progress class="progress is-small is-primary" max="100">15%</progress>
		{/if}
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
		{:else if currentStatus === "Has Errors"}
			<article class="message is-danger">
				<div class="message-header">
					<p>Warning</p>
				</div>
				<div class="message-body">Please fix all errors.</div>
			</article>
		{:else if statusUpdated}
			<article class="message is-danger">
				<div class="message-header">
					<p>Error</p>
				</div>
				<div class="message-body">Something went wrong.</div>
			</article>
		{/if}
	</div>

	<div id="form-buttons" class="has-text-centered">
		<Button
			disabled={buttonIsDisabled}
			title="Submit"
			on:handleStatus={updateStatus}
			{params}
		/>

		<button
			class="has-text-weight-bold button is-secondary"
			on:click={autoInput}>Feeling Lazy?</button
		>
	</div>

	<div id="reload-button" class="content hidden has-text-centered">
		<button class="has-text-weight-bold button is-primary" on:click={refresh}
			>Refresh</button
		>
	</div>
</div>

<style>
</style>
