<script>
    import Blog from '$lib/layouts/Blog.svelte';

    export let data;
</script>

<Blog 
    bind:title={data.post.title}
    bind:author={data.post.author}
    bind:date={data.post.date}>
    <div class="my-4 mx-auto">
        {@html data.post.content}
    </div>
</Blog>
