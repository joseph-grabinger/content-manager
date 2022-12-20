<script>
    import Blog from '$lib/components/blog/Blog.svelte';

    export let data;
    
</script>

<!-- <article>
    <svelte:component this={data.content} />
</article> -->

<Blog bind:title={data.post.title} bind:author={data.post.author} bind:date={data.post.date}>
    <div class="my-4 mx-auto">
        {@html data.post.content}
    </div>
</Blog>