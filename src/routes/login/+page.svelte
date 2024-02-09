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

<article class="centering">
	<form class="gapping" on:submit|preventDefault={login}>
		<div class="lblInput">
			<label for="username">Username:</label>
			<input id="username" type="text" bind:value={username} placeholder="Example" />
		</div>
		<div class="lblInput">
			<label for="password">Password:</label>
			<input id="password" type="password" bind:value={password} placeholder="****" />
		</div>

		<button>Login</button>

		<a class="link" href="/signup">
			Dont have an account?
			<div class="signup">signup!</div>
		</a>
	</form>
</article>

<style>
	.link {
		color: black;
		text-decoration: none;
		display: flex;
		gap: 0.25rem;
		justify-content: center;
	}

	.signup {
		color: blue;
		text-decoration: underline;
	}

	.centering {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.gapping {
		display: flex;
		gap: 1rem;
		flex-direction: column;
	}

	.lblInput {
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
	}
</style>
