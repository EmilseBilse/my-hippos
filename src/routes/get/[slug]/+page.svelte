<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get, put, remove } from '$lib/httpService';
	import { onDestroy, onMount } from 'svelte';
	import type { Unsubscriber } from 'svelte/motion';
	import { tokenStore } from '../../../stores/userStore';

	const slug: string = $page.params.slug;
	let hippo: Hippo = {
		name: '',
		weightKg: 0,
		color: '',
		habitat: '',
		maxSpeedKmHr: 0,
		birthDate: ''
	};

	let unsubscribe: Unsubscriber;

	onMount(async () => {
		const response = await get('/hippos/' + slug).then((res) => {
			const tempHippo = res;
			tempHippo.birthDate = formatDate(new Date(tempHippo.birthDate));
			hippo = tempHippo;
		});

		unsubscribe = tokenStore.subscribe((value) => {
			if (!value) {
				goto('/login');
			}
		});
	});

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});

	function handleUpdate() {
		put('/hippos/' + slug, hippo).then((res) => {
			if (!res) {
				alert('An error happend and the hippo was not updated');
				return;
			}
			goto('/get');
		});
	}

	function handleDelete() {
		remove('/hippos/' + slug).then((res) => {
			if (!res) {
				alert('An error happend and the hippo was not deleted');
				return;
			}
			goto('/get');
		});
	}

	function formatDate(date: Date) {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		return `${year}-${month}-${day}`;
	}
</script>

<article style="padding-top: 20px">
	<section class="wrapper">
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
		<div class="buttons">
			<button class="update" on:click={handleUpdate}>Update</button>
			<button class="delete" on:click={handleDelete}>Delete</button>
		</div>
	</section>
</article>

<style>
	.wrapper {
		max-width: 400px;
		margin: 0 auto;
		background-color: #cacaca;
		padding: 30px;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	label {
		display: block;
		margin-bottom: 5px;
		font-weight: bold;
	}
	input[type='text'],
	input[type='number'],
	input[type='date'] {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-sizing: border-box;
		font-size: 16px;
	}

	.update {
		background-color: #007bff;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.update:hover {
		background-color: #0056b3; /* Darken button on hover */
	}

	.delete {
		background-color: #ff002b;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.delete:hover {
		background-color: #af0009; /* Darken button on hover */
	}
	.buttons {
		display: flex;
		justify-content: space-between;
	}
</style>
