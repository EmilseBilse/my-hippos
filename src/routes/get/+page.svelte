<script lang="ts">
	import HippoCard from '../../components/hippo-card.svelte';
</script>

<article class="container">
	<HippoCard></HippoCard>
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
