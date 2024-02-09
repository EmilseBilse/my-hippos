<script lang="ts">
	let formData = {
		name: '',
		weight: 0,
		color: '',
		habitat: '',
		maxSpeed: 0,
		birthDate: ''
	};

	async function upload() {}
</script>

<article>
	<form on:submit|preventDefault={upload}>
		<h2>Add new hippo</h2>
		<div class="form-group">
			<label for="name">Name:</label>
			<input
				bind:value={formData.name}
				type="text"
				id="name"
				name="name"
				required
				autocomplete="off"
			/>
		</div>
		<div class="form-group">
			<label for="weight">Weight (kg):</label>
			<input
				bind:value={formData.weight}
				type="number"
				id="weight"
				name="weight"
				required
				autocomplete="off"
			/>
		</div>
		<div class="form-group">
			<label for="color">Color:</label>
			<input
				bind:value={formData.color}
				type="text"
				id="color"
				name="color"
				required
				autocomplete="off"
			/>
		</div>
		<div class="form-group">
			<label for="habitat">Habitat:</label>
			<input
				bind:value={formData.habitat}
				type="text"
				id="habitat"
				name="habitat"
				required
				autocomplete="off"
			/>
		</div>
		<div class="form-group">
			<label for="maxSpeed">Max Speed (km/hr):</label>
			<input
				bind:value={formData.maxSpeed}
				type="number"
				id="maxSpeed"
				name="maxSpeed"
				required
				autocomplete="off"
			/>
		</div>
		<div class="form-group">
			<label for="birthDate">Birth Date:</label>
			<input
				bind:value={formData.birthDate}
				type="date"
				id="birthDate"
				name="birthDate"
				required
				autocomplete="off"
			/>
		</div>
		<button type="submit">Submit</button>
	</form>
</article>

<style>
	form {
		max-width: 400px;
		margin: 0 auto;
		background-color: #cacaca;
		padding: 30px;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	h2 {
		text-align: center;
		margin-bottom: 20px;
	}
	.form-group {
		margin-bottom: 20px;
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
	button[type='submit'] {
		background-color: #007bff;
		color: #fff;
		padding: 12px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 16px;
		transition: background-color 0.3s;
	}
	button[type='submit']:hover {
		background-color: #0056b3;
	}
</style>
