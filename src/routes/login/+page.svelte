<script lang="ts">
	import { goto } from '$app/navigation';
	import { tokenStore } from '../../stores/userStore';

	let username: '';
	let password: '';
	const loginUrl = 'http://localhost:4000/api/user/login';

	async function login() {
		try {
			const response = await fetch(loginUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: username,
					password
				})
			});

			if (!response.ok) {
				throw new Error('Network response was not ok!');
			}

			const result = await response.json();

			if (result.error) {
				console.error('Login failed:', result.error);
				return null;
			}

			const { token } = result.data;

			localStorage.setItem('token', token);
			tokenStore.set(token); // Set the token in the store
			goto('/');
		} catch (error) {
			console.error('Error during login:', error);
			return null;
		}
	}
</script>

<article class="login-container">
	<h2>Login</h2>
	<form on:submit|preventDefault={login}>
		<input bind:value={username} type="text" name="username" placeholder="Username" required />
		<input bind:value={password} type="password" name="password" placeholder="Password" required />
		<input type="submit" value="Login" />
	</form>
	<div class="create-account-link">
		<a href="/signup">Create an account</a>
	</div>
</article>

<style>
	.login-container {
		max-width: 400px;
		margin: 0 auto;
		background-color: #fff;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		font-family: Arial, sans-serif;
	}
	.login-container h2 {
		text-align: center;
		margin-bottom: 20px;
	}
	.login-container input[type='text'],
	.login-container input[type='password'],
	.login-container input[type='submit'] {
		width: 100%;
		padding: 10px;
		margin-bottom: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-sizing: border-box;
	}
	.login-container input[type='submit'] {
		background-color: #007bff;
		color: #fff;
		cursor: pointer;
	}
	.login-container input[type='submit']:hover {
		background-color: #0056b3;
	}
	.create-account-link {
		text-align: center;
		margin-top: 10px;
	}
</style>
