<script>
    import logo from '$lib/images/logo_white.svg';
	import Hamburger from './Hamburger.svelte';
	import Menu from './Menu.svelte';
	
	export let pages = [];
	export let sidebar = false;

	$: width = 0;
</script>

<svelte:window bind:innerWidth={width}/>
<header class="flex justify-between bg-gray-800 fixed w-full z-10 top-0 p-2 items-center text-gray-600 border-b-0">
	<nav class="flex">
		<a href="/" class="flex items-center ml-4">
            <img src={logo} class="h-9 mr-3" alt="Dunef Logo">
        </a>
	</nav>
	{#if width > 600} 
	<Menu pages={pages}/>
	{:else}
	<Hamburger bind:open={sidebar}/>
	{/if}
</header>