<script>
    import { Tabs, TabPanel, Tab } from '$lib/components/tabbar/tabs.js';
	import Editor from '$lib/components/editor/Editor.svelte';
	import Preview from '$lib/components/editor/Preview.svelte';

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
            <Editor bind:quill={quill} bind:metaData={metaData} />
        </TabPanel>
        <TabPanel>
            <Preview bind:quill={quill} bind:metaData={metaData} />
        </TabPanel>
    </Tabs>
</div>