<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import HippoCard from '../../components/hippo-card.svelte';
	import { get } from '$lib/httpService';
	import { tokenStore } from '../../stores/userStore';
	import type { Unsubscriber } from 'svelte/motion';
	import { goto } from '$app/navigation';

	let allHippos: Hippo[] = [];

	let hoverEffect: boolean = false;
	let unsubscribe: Unsubscriber;

	onMount(async () => {
		await get('/hippos/').then((hippos) => {
			allHippos = hippos.map((hip: Hippo) => ({
				...hip,
				birthDate: new Date(hip.birthDate)
			}));
		});

		unsubscribe = tokenStore.subscribe((value) => {
			hoverEffect = !!value;
		});
	});

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});

	function nav(event: any) {
		goto('/get/' + event.detail.id);
	}
</script>

<article class="container">
	{#each allHippos as hippo}
		<HippoCard {hippo} {hoverEffect} on:click={nav}></HippoCard>
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
