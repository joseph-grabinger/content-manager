<script>
    import { convertNameToInitials } from '$lib/utils.js';
    import Switch from '$lib/components/switch/Switch.svelte'
    
    export let data;

    let switchValue; // true = posts, false = news
</script>

<div class="max-w-lg mx-auto lg:max-w-7xl">
    <div class="flex justify-between border-b border-b-gray-200 pb-2">
        <h2 class="pt-3 align-bottom text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl">Posts</h2>
        <Switch bind:value={switchValue} options={['Posts', 'News']}/>
        <div class="flex">
            <div class="avatar">{convertNameToInitials(data.userName)}</div>
            <form method="POST" action="?/logout">
                <button type="submit">
                    <svg class="mt-4 ml-2 hover:fill-sky-700" 
                        width="35px" 
                        height="35px" 
                        viewBox="0 0 24 24">
                        <path  d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
                    </svg>
                </button>
            </form>
        </div>
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

<style>
    .avatar {
        /* Rounded border */
        border-radius: 50%;

        /* Bachground color */
        background-color: #7d838a;

        /* Center the content */
        align-items: center;
        display: flex;
        justify-content: center;

        /* Size */
        height: 4rem;
        width: 4rem;

        /* Font */
        font-size: 1.8rem;
        font-weight: 700;
        color: #fff;
    }
</style>