<script>
    import Topbar from './Topbar.svelte';
    import Sidebar from './Sidebar.svelte';

    let pages = [
        { title: 'Blog', href: '/blog' },
        { title: 'News', href: '/news' },
        { title: 'About Us', href: '/about' },
    ];

    let open = false;
</script>

<Sidebar bind:open pages={pages}/>
<Topbar bind:sidebar={open} pages={pages}/>