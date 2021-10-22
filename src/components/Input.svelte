<script>
	import { states } from "../../scripts/regions.js"
	export let params
	export let id
	export let isDate
	export let isDropdown
	export let placeholder
	export let value
	export let label
	export let isDanger
</script>

<div class="user-input">
	<p class="label">{label}</p>
	<div class="control">
		{#if !isDropdown && !isDate}
			<input
				{id}
				class="input"
				type="text"
				{placeholder}
				bind:value={params[value]}
			/>
		{:else if isDropdown}
			<select {id} bind:value={params[value]}>
				{#each Object.keys(states) as code}
					<option value={code}>{states[code]}</option>
				{/each}
			</select>
		{:else if isDate}
			<input {id} class="input" type="date" bind:value={params[value]} />
		{/if}
		{#if isDanger}
			<div class="icon-text">
				<span class="icon has-text-danger is-large">
					<i class="fas fa-ban">
						<ion-icon name="warning-outline" />
					</i>
				</span>
			</div>
		{/if}
	</div>
</div>
