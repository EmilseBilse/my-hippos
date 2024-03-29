<script lang="ts">
	import { goto } from '$app/navigation';
	import { post } from '$lib/httpService';
	import { onDestroy, onMount } from 'svelte';
	import { tokenStore } from '../../stores/userStore';
	import type { Unsubscriber } from 'svelte/motion';

	let username = '';
	let email = '';
	let password = '';

	let unsubscribe: Unsubscriber;

	onMount(() => {
		unsubscribe = tokenStore.subscribe((value) => {
			if (value) {
				goto('/');
			}
		});
	});

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});

	async function signup() {
		const response = await post('/user/register', {
			name: username,
			password,
			email
		});

		if (!response.ok) {
			throw new Error('Network response was not ok!');
		}

		const result = await response.json();

		if (!result) {
			console.error('Login failed:', result.error);
			return null;
		}

		goto('/login');
	}
</script>

<article style="padding-top: 20px">
	<div class="wrapper">
		<form on:submit|preventDefault={signup}>
			<h2>Create Account</h2>
			<div class="form-group">
				<input
					bind:value={username}
					type="text"
					class="form-control"
					name="name"
					placeholder="Name"
					required
					minlength="6"
					autocomplete="off"
				/>
			</div>
			<div class="form-group">
				<input
					bind:value={email}
					type="email"
					class="form-control"
					name="email"
					placeholder="Email"
					required
					autocomplete="off"
				/>
			</div>
			<div class="form-group">
				<input
					bind:value={password}
					type="password"
					class="form-control"
					name="password"
					placeholder="Password"
					required
					minlength="8"
					autocomplete="off"
				/>
			</div>
			<div class="form-group">
				<button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
			</div>
		</form>
		<div class="redirect-button">
			<a href="/login">Already have an account? Login here.</a>
		</div>
	</div>
</article>

<style>
	.wrapper {
		max-width: 400px;
		margin: 0 auto;
		background-color: #cacaca;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.wrapper h2 {
		text-align: center;
		margin-bottom: 20px;
	}
	.form-group {
		margin-bottom: 20px;
	}
	.form-group input[type='text'],
	.form-group input[type='email'],
	.form-group input[type='password'],
	.form-group button {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-sizing: border-box;
	}
	.form-group button {
		background-color: #28a745;
		color: #fff;
		cursor: pointer;
	}
	.form-group button:hover {
		background-color: #218838;
	}
	.redirect-button {
		text-align: center;
		margin-top: 10px;
	}
	.redirect-button a {
		text-decoration: none;
		color: #007bff;
	}
</style>
