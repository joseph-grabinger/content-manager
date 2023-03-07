<script>
    import { onMount } from 'svelte';
    import { scale } from 'svelte/transition';
    import { Tabs, TabPanel } from '$lib/components/tabbar/tabs.js';
    import Switch from '$lib/components/tabbar/Switch.svelte'
    
    export let data;

    let switchValue; // true = posts, false = news

    let showMenu = false; // menu state
    let menu = null; // menu wrapper DOM reference

    onMount(() => {
        const handleOutsideClick = (event) => {
            if (showMenu && !menu.contains(event.target)) {
                showMenu = false;
            }
        };

        const handleEscape = (event) => {
            if (showMenu && event.key === 'Escape') {
                showMenu = false;
            }
        };

        // add events when element is added to the DOM
        document.addEventListener('click', handleOutsideClick, false);
        document.addEventListener('keyup', handleEscape, false);

        // remove events when element is removed from the DOM
        return () => {
            document.removeEventListener('click', handleOutsideClick, false);
            document.removeEventListener('keyup', handleEscape, false);
        };
    });

</script>

<div class="max-w-lg mx-auto lg:max-w-7xl">
    <Tabs>
        <div class="flex justify-between border-b border-b-gray-200 pb-2">
            <h2 class="pt-3 align-bottom text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl">{switchValue ? 'Posts' : 'News'}</h2>
            <Switch bind:value={switchValue} options={['Posts', 'News']} />
            <div class="flex">
                <!-- <div class="avatar">{convertNameToInitials(data.user["name"])}</div> -->
                <div class="relative inline-block text-left pt-2" bind:this={menu}>
                    <div>
                        <button 
                            type="button" 
                            on:click={() => (showMenu = !showMenu)}
                            class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" 
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                        >{data.user.email}
                            <svg 
                                class="-mr-1 h-5 w-5 text-gray-400" 
                                viewBox="0 0 20 20" 
                                fill="currentColor" 
                                aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {#if showMenu}
                        <div
                            in:scale={{ duration: 100, start: 0.95 }}
                            out:scale={{ duration: 75, start: 0.95 }}
                            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" 
                            id="dropdown" 
                            role="menu" 
                            aria-orientation="vertical" 
                            aria-labelledby="menu-button" 
                            tabindex="-1">
                            <div class="py-1 divide-y divide-gray-100" role="none">
                                <div class="flex justify-start px-4 py-2 hover:bg-gray-50">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="35px" 
                                        height="35px" 
                                        viewBox="0 0 24 24">
                                        <path fill="#444444" d="M10 4A4 4 0 0 0 6 8A4 4 0 0 0 10 12A4 4 0 0 0 14 8A4 4 0 0 0 10 4M17 12C16.87 12 16.76 12.09 16.74 12.21L16.55 13.53C16.25 13.66 15.96 13.82 15.7 14L14.46 13.5C14.35 13.5 14.22 13.5 14.15 13.63L13.15 15.36C13.09 15.47 13.11 15.6 13.21 15.68L14.27 16.5C14.25 16.67 14.24 16.83 14.24 17C14.24 17.17 14.25 17.33 14.27 17.5L13.21 18.32C13.12 18.4 13.09 18.53 13.15 18.64L14.15 20.37C14.21 20.5 14.34 20.5 14.46 20.5L15.7 20C15.96 20.18 16.24 20.35 16.55 20.47L16.74 21.79C16.76 21.91 16.86 22 17 22H19C19.11 22 19.22 21.91 19.24 21.79L19.43 20.47C19.73 20.34 20 20.18 20.27 20L21.5 20.5C21.63 20.5 21.76 20.5 21.83 20.37L22.83 18.64C22.89 18.53 22.86 18.4 22.77 18.32L21.7 17.5C21.72 17.33 21.74 17.17 21.74 17C21.74 16.83 21.73 16.67 21.7 16.5L22.76 15.68C22.85 15.6 22.88 15.47 22.82 15.36L21.82 13.63C21.76 13.5 21.63 13.5 21.5 13.5L20.27 14C20 13.82 19.73 13.65 19.42 13.53L19.23 12.21C19.22 12.09 19.11 12 19 12H17M10 14C5.58 14 2 15.79 2 18V20H11.68A7 7 0 0 1 11 17A7 7 0 0 1 11.64 14.09C11.11 14.03 10.56 14 10 14M18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5C17.16 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5Z" />
                                    </svg>
                                    <a 
                                        href="/admin/account" 
                                        class="text-gray-700 block px-4 py-2 text-sm" 
                                        role="menuitem" 
                                        tabindex="-1" 
                                        id="menu-item-0"
                                    >Account settings</a>
                                </div>
                                <form method="POST" action="?/logout">
                                    <button 
                                        type="submit" 
                                        class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-50" 
                                        role="menuitem" 
                                        tabindex="-1" 
                                        id="menu-item-3">
                                        <div class="flex justify-start">
                                            <svg
                                                width="35px"
                                                height="35px"
                                                viewBox="0 0 24 24">
                                                <path fill="#444444" d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
                                            </svg>
                                            <span class="py-2 px-4 text-sm">Sign out</span>
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
        <TabPanel>
            <div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                {#each data.posts as post}
                    <div class="border border-gray-200 p-4 rounded-lg flex flex-col justify-between"
                        id="post">
                        <div>
                            <a href="/blog/{post.title}" sveltekit:preload>
                            <p class="text-xl text-gray-900">{post.title}</p>
                            <p class="mt-3 text-gray-500">{post.excerpt}</p>
                        </div>
                        <div class="flex justify-between">
                            <div class="mt-6">
                                <p class="text-sm font-medium text-gray-900">
                                    {post.author}
                                </p>
                                <div class="text-sm text-gray-500">
                                    <time datetime="2020-03-16">{post.date}</time>
                                </div>
                            </div>
                            <button class="edit">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                        width="35px"
                                        height="35px"
                                        viewBox="0 0 24 24">
                                        <title>Edit Post</title>
                                        <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                                    </svg>
                            </button>
                        </div>
                    </div>
                {/each}
                <div class="border border-gray-200 p-4 rounded-lg flex flex-col justify-between">
                    <a href="/admin/blog-editor" sveltekit:preload>
                    <p class="text-xl text-gray-900">Add a new Post</p>
                    <svg class="block m-auto mt-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="55px"
                        height="55px"
                        viewBox="0 0 24 24">
                        <title>New Post</title>
                        <path fill="#87CEEB" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <h2>To be done!</h2>
        </TabPanel>
    </Tabs>
</div>

<style>

    .edit {
        animation: fadeIn 3s;
        animation-fill-mode: forwards;

        visibility: hidden;
    }

    #post:hover .edit {
        visibility: visible;
    }

</style>