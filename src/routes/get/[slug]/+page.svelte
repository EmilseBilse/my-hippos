<script lang="ts">
	import { page } from '$app/stores';
	import { get } from '$lib/httpService';
	import { onMount } from 'svelte';

	const slug: string = $page.params.slug;
	let hippo: Hippo = {
		name: '',
		weightKg: 0,
		color: '',
		habitat: '',
		maxSpeedKmHr: 0,
		birthDate: ''
	};

	onMount(async () => {
		const response = await get('/hippos/' + slug).then((res) => {
			const tempHippo = res;
			tempHippo.birthDate = formatDate(new Date(tempHippo.birthDate));
			hippo = tempHippo;
		});
	});

	function handleSubmit() {
		console.log('aa');
	}

	function formatDate(date: Date) {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		return `${year}-${month}-${day}`;
	}
</script>

<article>
	<form on:submit={handleSubmit}>
		<div>
			<label for="name">Name:</label>
			<input id="name" type="text" bind:value={hippo.name} required autocomplete="off" />
		</div>

		<div>
			<label for="weightKg">Weight (kg):</label>
			<input id="weightKg" type="number" bind:value={hippo.weightKg} required autocomplete="off" />
		</div>

		<div>
			<label for="color">Color:</label>
			<input id="color" type="text" bind:value={hippo.color} required autocomplete="off" />
		</div>

		<div>
			<label for="habitat">Habitat:</label>
			<input id="habitat" type="text" bind:value={hippo.habitat} required autocomplete="off" />
		</div>

		<div>
			<label for="maxSpeedKmHr">Max Speed (km/hr):</label>
			<input
				id="maxSpeedKmHr"
				type="number"
				bind:value={hippo.maxSpeedKmHr}
				required
				autocomplete="off"
			/>
		</div>

		<div>
			<label for="birthDate">Birth Date:</label>
			<input id="birthDate" type="date" bind:value={hippo.birthDate} required autocomplete="off" />
		</div>
	</form>
	<button type="submit">Update</button>
	<button type="reset">Delete</button>
</article>

<style>
	article {
		max-width: 500px;
		margin: 20px auto;
		padding: 20px;
		background-color: #f9f9f9;
		border: 1px solid #e1e1e1;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	form > div {
		margin-bottom: 15px;
	}

	label {
		display: block;
		margin-bottom: 5px;
		color: #333;
		font-size: 16px;
	}

	input {
		width: 100%;
		padding: 8px 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box; /* Ensures padding doesn't affect overall width */
		transition: border-color 0.3s;
	}

	input:focus {
		outline: none;
		border-color: #007bff; /* Highlight focus with a blue border */
	}

	button[type='submit'] {
		background-color: #007bff;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	button[type='submit']:hover {
		background-color: #0056b3; /* Darken button on hover */
	}

	button[type='reset'] {
		background-color: #ff002b;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	button[type='reset']:hover {
		background-color: #af0009; /* Darken button on hover */
	}
</style>
