<script>
	import { onMount } from 'svelte';

	export let pages = [];
	export let open = false;

	onMount(() => {
		let element = document.getElementById('sidebar');

		element.addEventListener('click', (e) => {
			open = false;
		});
	});
</script>

<aside id="sidebar" class="absolute w-full h-full pt-10 bg-gray-800 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		{#each pages as page}
			<a href={page.href} class="block text-gray-100 hover:text-gray-400 hover:no-underline">{page.title}</a>
		{/each}
	</nav>
</aside>


<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}
	
	.open {
		left: 0%;
	}
</style>