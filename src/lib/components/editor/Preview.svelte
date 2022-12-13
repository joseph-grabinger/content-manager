<script>
    export let quill;

    $: content = quill.root.innerHTML;
    $: console.log(content);

</script>

<div class="my-4 mx-auto">
    {#if content === "<p><br></p>"}
        <p class="text-gray-500">Nothing to preview</p>
    {:else}
        {@html content}
    {/if}
</div>