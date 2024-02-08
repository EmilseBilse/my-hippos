<script>

</script>
<article class="centering colomns">
    <nav class="centering">
        <a href="/" class="navBarTextStyling">home</a>
        <a href="/get" class="navBarTextStyling">get</a>
        <a href="/create" class="navBarTextStyling">create</a>
        <a href="/login" class="navBarTextStyling">login</a>
    </nav>

    <slot></slot>
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
    .colomns {
        flex-direction: column;
    }
    
</style>