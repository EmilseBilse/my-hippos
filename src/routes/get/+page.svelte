<script lang="ts">
	import HippoCard from '../../components/hippo-card.svelte';

	let oneHippo: Hippo = {
		name: 'Happy hippo',
		weightKg: 1500,
		color: 'Pink',
		habitat: 'Rivers',
		maxSpeedKmHr: 40,
		birthDate: '2016-04-25'
	};
</script>

<article class="container">
	<HippoCard hippo={oneHippo}></HippoCard>
	<HippoCard></HippoCard>
	<HippoCard></HippoCard>
	<HippoCard></HippoCard>
	<HippoCard></HippoCard>
	<HippoCard></HippoCard>
	<HippoCard></HippoCard>
</article>

<style>
	.container {
		display: grid;
		grid-gap: 20px;
		justify-content: center;
		padding: 20px;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
</style>
