<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let hippo: Hippo = {
		name: 'Hippo no name',
		weightKg: 2000,
		color: 'Grey',
		habitat: 'Lakes',
		maxSpeedKmHr: 30,
		birthDate: '2010-04-25'
	};

	export let hoverEffect: boolean = !!localStorage.getItem('token');

	const dispatch = createEventDispatcher();

	const formatter = new Intl.DateTimeFormat('da', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	});

	function elementCLicked() {
		if (!hoverEffect) {
			return;
		}

		dispatch('click', { id: hippo._id });
	}
</script>

<article>
	<div class="card" class:hoverEffect on:click={elementCLicked}>
		<div class="card-header">
			<h2>{hippo.name}</h2>
		</div>
		<div class="card-body">
			<p><strong>Weight (kg):</strong> {hippo.weightKg}</p>
			<p><strong>Color:</strong> {hippo.color}</p>
			<p><strong>Habitat:</strong> {hippo.habitat}</p>
			<p><strong>Max Speed (km/hr):</strong> {hippo.maxSpeedKmHr}</p>
			<p><strong>Birth Date:</strong> {formatter.format(hippo.birthDate)}</p>
		</div>
	</div>
</article>

<style>
	.card {
		background-color: #cacaca;
		border: 1px solid #ddd;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		max-width: 400px;
		margin: 20px auto;
		padding: 20px;
	}

	.card-header h2 {
		margin: 0;
		padding-bottom: 10px;
		border-bottom: 1px solid #eee;
		color: #333;
	}

	.card-body p {
		color: #666;
		line-height: 1.6;
		margin: 10px 0;
	}

	.card-body p strong {
		color: #333;
	}

	.hoverEffect {
		cursor: pointer;
		transition-property: all;
		transition-duration: 250ms;
		&:hover {
			scale: 1.02;
		}
	}
</style>
