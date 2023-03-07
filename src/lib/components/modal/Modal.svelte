<script>
	export let showModal; // boolean

	let dialog; // HTMLDialogElement DOM reference

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation>
		<div class="flex justify-between">
            <slot name="header"/>
            <button on:click={() => dialog.close()}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px" 
                    height="30px"
                    viewBox="0 0 24 24">
                    <title>Close Window</title>
                    <path fill="#444444" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
                </svg>
            </button>
        </div>
        <div class="pt-6">
            <slot />
        </div>
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
        min-width: 22em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}

    :global( [slot="header"] ) {
        padding-top: 5px;
        font-size: large;
        font-weight: semibold;
    }
</style>