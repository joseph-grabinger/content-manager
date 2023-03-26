<script>
    import { Tabs, TabPanel, Tab } from '$lib/components/tabbar/tabs.js';
	import NewsEditor from '$lib/components/editor/EdiNewsEditortor.svelte';
	import NewsPreview from '$lib/components/editor/NewsPreview.svelte';

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
            <NewsEditor bind:quill={quill} bind:metaData={metaData} />
        </TabPanel>
        <TabPanel>
            <NewsPreview quill={quill} metaData={metaData} />
        </TabPanel>
    </Tabs>
</div>
