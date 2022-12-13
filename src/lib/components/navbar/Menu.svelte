<script>
    export let pages = [];
</script>

<nav class="mr-5 space-x-10 text-gray-500 uppercase text-bold">
    {#each pages as page}
    <a href={page.href} class="text-gray-100 hover:text-gray-400 hover:no-underline">{page.title}</a>
    {/each}
</nav>
