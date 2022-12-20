<script>
    import Blog from '$lib/components/blog/Blog.svelte';

    export let quill;
    export let metaData;

    $: content = quill.root.innerHTML;

    let today = new Date().toJSON().slice(0,10);
</script>


<Blog bind:title={metaData.title} bind:author={metaData.author} bind:date={today}>
    <div class="my-4 mx-auto">
        {#if content === "<p><br></p>"}
            <p class="text-gray-500">Nothing to preview</p>
        {:else}
            {@html content}
        {/if}
    </div>
</Blog>
