<script lang="ts">
	import { onMount } from 'svelte';
	import HippoCard from '../../components/hippo-card.svelte';
	import { get } from '$lib/httpService';

	let allHippos: Hippo[] = [];

	onMount(async () => {
		await get('/hippos/').then((hippos) => {
			allHippos = hippos;
		});
	});
</script>

<article class="container">
	{#each allHippos as hippo}
		<HippoCard {hippo}></HippoCard>
	{/each}
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
