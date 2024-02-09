<script lang="ts">
	import { tokenStore } from '../stores/userStore'; // Adjust the path as necessary

	function logout() {
		localStorage.removeItem('token');
		tokenStore.set(null); // Update the store instead of a local variable
	}
</script>

<article class="centering columns">
	<nav class="centering">
		<a href="/" class="navBarTextStyling">home</a>
		<a href="/get" class="navBarTextStyling">get</a>
		<a href="/create" class="navBarTextStyling">create</a>
		{#if !$tokenStore}
			<a href="/login" class="navBarTextStyling">login</a>
		{:else}
			<button on:click={logout} class="removeBtnStyling">logout</button>
		{/if}
	</nav>

	<slot />
</article>

<style>
	.centering {
		display: flex;
		justify-content: center;
		gap: 2rem;
	}

	.navBarTextStyling {
		color: rgb(49, 49, 61);
		font-size: larger;
		text-decoration: none;
	}
	.columns {
		flex-direction: column;
	}

	.removeBtnStyling {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		color: rgb(49, 49, 61);
		font-size: larger;
		text-decoration: none;
	}
</style>
