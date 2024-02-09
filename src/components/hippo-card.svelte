<script lang="ts">
	export let hippo: Hippo = {
		name: 'Hippo no name',
		weightKg: 2000,
		color: 'Grey',
		habitat: 'Lakes',
		maxSpeedKmHr: 30,
		birthDate: '2010-04-25'
	};
</script>

<article>
	<div class="card">
		<div class="card-header">
			<h2>Hippo Details</h2>
		</div>
		<div class="card-body">
			<p><strong>Name:</strong> {hippo.name}</p>
			<p><strong>Weight (kg):</strong> {hippo.weightKg}</p>
			<p><strong>Color:</strong> {hippo.color}</p>
			<p><strong>Habitat:</strong> {hippo.habitat}</p>
			<p><strong>Max Speed (km/hr):</strong> {hippo.maxSpeedKmHr}</p>
			<p><strong>Birth Date:</strong> {hippo.birthDate}</p>
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
		cursor: pointer;
		-moz-user-select: none;
		user-select: none;
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
</style>
