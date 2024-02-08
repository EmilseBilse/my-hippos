<script lang="ts">

</script>

<article class="centering">

    <form class="gapping">
        <div class="lblInput">
            <label for="username">Username:</label>
            <input id="username" type="text" placeholder="Example"/>
        </div>
        <div class="lblInput">
            <label for="password">Password:</label>
            <input id="password" type="password" placeholder="****"/>
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