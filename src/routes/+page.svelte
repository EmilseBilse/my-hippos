<article class="welcome-screen">
	<h1>Welcome to the Hippo Manager</h1>
	<p>This application allows you to manage a database of hippos. Here's what you can do:</p>
	<ul>
		<li><strong>Create Hippos:</strong> Add new hippos to the database.</li>
		<li><strong>Display All Hippos:</strong> View a list of all hippos.</li>
		<li>
			<strong>Update/Delete Hippos:</strong> Modify existing hippos or remove them from the database.
			(Requires login)
		</li>
		<li>
			<strong>User Authentication:</strong> Log in to access creation, updating, and deletion capabilities.
			You can also create a new user account.
		</li>
	</ul>
	<p>Note: You must be logged in to create, update, or delete hippos.</p>
	<section class="technology-stack">
		<h2>Technology Stack</h2>
		<p>
			The Hippo Manager is built using modern technologies to ensure a seamless user experience:
		</p>
		<ul>
			<li>
				<strong>Frontend:</strong> SvelteKit - A fast, modern web framework for building user interfaces.
			</li>
			<li>
				<strong>Backend:</strong> Express.js - A robust server framework running on Node.js, paired with
				MongoDB for data storage.
			</li>
		</ul>
	</section>
</article>

<style>
	.welcome-screen {
		check if fail pipeline
		max-width: 600px;
		margin: 20px auto;
		padding: 20px;
		background-color: #cacaca;
		border: 1px solid #cacaca7a;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.welcome-screen h1 {
		color: #333;
		text-align: center;
	}

	.welcome-screen p {
		color: #666;
		font-size: 16px;
		line-height: 1.5;
	}

	.welcome-screen ul {
		list-style-type: none;
		padding: 0;
	}

	.welcome-screen ul li {
		background-color: #e0e0e0;
		margin-bottom: 10px;
		padding: 10px;
		border-radius: 4px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
		font-size: 16px;
		line-height: 1.5;
	}

	.welcome-screen ul li strong {
		color: #007bff;
	}

	.technology-stack {
		margin-top: 20px;
		padding-top: 20px;
		border-top: 1px solid #ddd;
	}

	.technology-stack h2 {
		color: #333;
		text-align: center;
	}

	.technology-stack p,
	.technology-stack ul li {
		font-size: 16px;
		line-height: 1.5;
	}

	.technology-stack ul li {
		background-color: #ddd;
		margin-bottom: 10px;
		padding: 10px;
		border-radius: 4px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}
</style>
