<script>
    export let data;
    console.log("User-Session: " + data.session);
</script>

<div class="max-w-lg mx-auto lg:max-w-7xl">
    <div class="border-b border-b-gray-200 pb-6">
        <h2 class="text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl">Posts</h2>
    </div>
    <div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {#each data.posts as post}
            <div class="border border-gray-200 p-4 rounded-lg flex flex-col justify-between">
                <div>
                    <!-- <a href="/blog/{post.title}" sveltekit:preload> -->
                    <p class="text-xl text-gray-900">{post.title}</p>
                    <p class="mt-3 text-gray-500">{post.excerpt}</p>
                    </div>
                <div class="mt-6">
                    <p class="text-sm font-medium text-gray-900">
                        {post.author}
                    </p>
                    <div class="text-sm text-gray-500">
                        <time datetime="2020-03-16">{post.date}</time>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>