<script>
    export let data;
</script>

<div class="max-w-lg mx-auto lg:max-w-7xl">
    <div class="border-b border-b-gray-200 pb-6">
        <h2 class="text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl">Recent News</h2>
    </div>
    <div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {#each data.news as story}
            <div class="border border-gray-200 p-4 rounded-lg flex flex-col justify-between">
                <a href="/news/{story.title}" sveltekit:preload>
                    <p class="text-xl text-gray-900">{story.title}</p>
                    <p class="mt-3 text-gray-500">{story.excerpt}</p>
                </a>
                <div class="mt-6">
                    <p class="text-sm font-medium text-gray-900">
                        {story.author}
                    </p>
                    <div class="text-sm text-gray-500">
                        <time datetime="2020-03-16">{story.date}</time>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>