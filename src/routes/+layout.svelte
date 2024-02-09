<script lang="ts">
	import { onMount } from 'svelte';
	import { tokenStore } from '../stores/userStore'; // Adjust the path as necessary

	function logout() {
		localStorage.removeItem('token');
		tokenStore.set(null); // Update the store instead of a local variable
	}

	onMount(() => {
		tokenStore.set(localStorage.getItem('token'));
	});
</script>

<article class="navbar-container">
	<nav class="navbar">
		<a href="/" class="nav-link">home</a>
		<a href="/get" class="nav-link">get</a>
		<a href="/create" class="nav-link">create</a>
		{#if !$tokenStore}
			<a href="/login" class="nav-link">login</a>
		{:else}
			<button on:click={logout} class="logout-btn">logout</button>
		{/if}
	</nav>
</article>

<slot />

<style>
	.navbar-container {
		position: sticky;
		top: 0;
		background-color: #fff;
		border-bottom: 2px solid #eee;
		z-index: 1000;
	}

	.navbar {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		padding: 1rem 0;
	}

	.nav-link {
		color: rgb(49, 49, 61);
		font-size: larger;
		text-decoration: none;
		padding: 0.5rem 1rem;
		transition:
			color 0.3s ease,
			background-color 0.3s ease;
	}

	.nav-link:hover,
	.nav-link:focus {
		background-color: #f0f0f0;
		border-radius: 5px;
	}

	.logout-btn {
		background: none;
		color: rgb(49, 49, 61);
		border: 1px solid rgb(49, 49, 61); /* Optional: adds a border to the logout button */
		padding: 0.5rem 1rem;
		font-size: larger;
		cursor: pointer;
		border-radius: 5px;
		transition:
			color 0.3s ease,
			background-color 0.3s ease;
	}

	.logout-btn:hover,
	.logout-btn:focus {
		background-color: #f0f0f0;
	}
</style>
