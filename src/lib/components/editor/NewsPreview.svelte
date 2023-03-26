<script>
    import News from '$lib/layouts/News.svelte';

    export let quill;
    export let metaData;

    $: content = quill.root.innerHTML;

    let today = new Date().toJSON().slice(0,10);
</script>


<News
    bind:title={metaData.title}
    bind:author={metaData.author}
    bind:date={today}
    bind:thumbnail={metaData.thumbnail}>
    <div class="my-4 mx-auto">
        {#if content === "<p><br></p>"}
            <p class="text-gray-500">Nothing to preview</p>
        {:else}
            {@html content}
        {/if}
    </div>
</News>
