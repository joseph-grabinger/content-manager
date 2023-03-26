<script>
    import News from '$lib/layouts/News.svelte';

    export let data;
</script>

<News 
    bind:title={data.story.title}
    bind:author={data.story.author}
    bind:date={data.story.date}
    bind:thumbnail={data.story.thumbnail}>
    <div class="my-4 mx-auto">
        {@html data.story.content}
    </div>
</News>
