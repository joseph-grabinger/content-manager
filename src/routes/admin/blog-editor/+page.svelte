<script>
    import { Tabs, TabPanel, Tab } from '$lib/components/tabbar/tabs.js';
	import BlogEditor from '$lib/components/editor/BlogEditor.svelte';
	import BlogPreview from '$lib/components/editor/BlogPreview.svelte';

    let quill;
    let metaData;
</script>

<div class="container mx-auto">
    <Tabs>
        <div class="inline-block mx-auto">
            <Tab>Edit</Tab>
            <Tab>View</Tab>
        </div>
        <TabPanel>
            <BlogEditor bind:quill={quill} bind:metaData={metaData} />
        </TabPanel>
        <TabPanel>
            <BlogPreview quill={quill} metaData={metaData} />
        </TabPanel>
    </Tabs>
</div>
