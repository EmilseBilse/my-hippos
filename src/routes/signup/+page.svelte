<script lang="ts">
</script>

<article class="wrapper">
	<form action="/submit-your-form" method="post">
		<h2>Create Account</h2>
		<p class="hint-text">It's quick and easy.</p>
		<div class="form-group">
			<input type="text" class="form-control" name="name" placeholder="Name" required />
		</div>
		<div class="form-group">
			<input type="email" class="form-control" name="email" placeholder="Email" required />
		</div>
		<div class="form-group">
			<input type="password" class="form-control" name="password" placeholder="Password" required />
		</div>
		<div class="form-group">
			<button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
		</div>
	</form>
</article>

<style>
	.wrapper {
		font-family: 'Arial', sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		margin: 0;
	}
	form {
		background-color: #ffffff;
		padding: 40px;
		border-radius: 8px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 400px;
	}

	h2 {
		text-align: center;
		color: #333;
		margin-bottom: 20px;
	}

	.p {
		text-align: center;
		color: #666;
		font-size: 16px;
		margin-bottom: 30px;
	}

	.form-group {
		margin-bottom: 20px;
	}

	.form-control {
		width: 100%;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ccc;
		font-size: 16px;
		color: #333;
	}

	.form-control:focus {
		border-color: #5cb85c;
		box-shadow:
			inset 0 1px 1px rgba(0, 0, 0, 0.075),
			0 0 8px rgba(92, 184, 92, 0.6);
	}

	.btn {
		width: 100%;
		padding: 10px;
		border-radius: 5px;
		border: none;
		font-size: 18px;
		font-weight: bold;
		color: #fff;
		background-color: #5cb85c;
		cursor: pointer;
	}

	.btn:hover {
		background-color: #449d44;
	}

	.btn:active {
		background-color: #398439;
	}

	.btn:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);
	}

	.btn-lg {
		padding: 15px;
	}

	.btn-block {
		display: block;
	}

	.hint-text {
		text-align: center;
		color: #999;
		font-size: 15px;
	}
</style>
