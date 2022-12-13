<script>
	import { onMount } from 'svelte';
	import Quill from 'quill';
    import BlotFormatter from 'quill-blot-formatter';

    export let quill;
	
    onMount( () => {
        Quill.register('modules/blotFormatter', BlotFormatter);
        quill = new Quill('#editor-container', {
            modules: {
                toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    [{list: "ordered"}, {list: "bullet"}],
                    [{ 'indent': '-1'}, { 'indent': '+1' }],
                    ["bold", "italic", "underline", "strike"],
                    [{ 'align': [] }],
                    ["link", "image", "video", "code-block", "blockquote"],
                    ['clean'],
                ],
                blotFormatter: {
                    // see config options below
                }
            },
            placeholder: "Type your blog content here...",
            theme: "snow"
        });

        let form = document.querySelector('form');
        form.onsubmit = function() {
            console.log("submitting" + quill.root.innerHTML);
            // Populate hidden form on submit
            const formData = new FormData(form);
            let json = Object.fromEntries(formData.entries())
            json["content"] = JSON.stringify(quill.getContents());
            // No back end to actually submit to!
            console.log(json);
            alert('Open the console to see the submit data!')
            return false;
        };

        var toolbar = quill.getModule('toolbar');
        toolbar.container.style.borderRadius = "4px 4px 0px 0px";
	});
</script>

<style>
    input {
        padding: 6px 12px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        appearance: none;
        border-radius: 4px;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    input:focus{
        color: #212529;
        background-color: #fff;
        border-color: #86b7fe;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }

    #editor-container {
        height: 375px;
    }

    .btn {
        margin: 15px;
        display: inline-block;
        outline: 0;
        cursor: pointer;
        border: none;
        padding: 0 56px;
        height: 45px;
        line-height: 45px;
        border-radius: 7px;
        background-color: #0070f3;
        color: white;
        font-weight: 400;
        font-size: 16px;
        box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
        transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;
    }
    .btn:hover{
        background: rgba(0,118,255,0.9);
        box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
    }
</style>

<svelte:head>
	<link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</svelte:head>

<div id="form-container" class="container pt-4">
    <form>
        <div class="flex col-1 gap-6">
            <div class="form-group flex flex-col grow">
                <label for="title" class="font-bold">Title</label>
                <input class="form-control" name="title" type="text" value="Lorem ipsum">
            </div>
            <div class="form-group flex flex-col grow-0">
                <label for="author" class="font-bold">Author</label>
                <input class="form-control"  name="author" type="text" value="Maxime Mustermann">
            </div>
        </div>
        <div class="form-group pt-4">
            <label for="content" class="font-bold">Content</label>
            <input type="hidden" name="content">
            <div id="toolbar-container"></div>
            <div id="editor-container" class="rounded-b-lg">
                {#if quill}
                {@html quill.root.innerHTML}
                {/if}
                <!-- initial data here -->
            </div>
        </div>
        <button class="btn btn-primary" type="submit">Save Post</button>
    </form>
</div>

