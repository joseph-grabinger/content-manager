<script>
	export let value = true;
    export let options = ["on", "off"];

    const uniqueID = Math.floor(Math.random() * 100);

    function handleClick(event){
        const target = event.target

        const state = target.getAttribute('aria-checked')

        value = state === 'true' ? false : true
    }

</script>

<div class="s s--slider">
    <button
        class="flex items-center justify-between px-5"
        role="switch"
        aria-checked={value}
        aria-labelledby={`switch-${uniqueID}`}
        on:click={handleClick}>
            <span>{options[0]}</span>
            <span>{options[1]}</span>
    </button>
</div>

<style>
    :root {
        --accent-color: CornflowerBlue;
        --gray: rgb(133, 118, 138);
    }

/* Slider Design Option */

    .s--slider {
        display: flex;
        align-items: center;
    }

    .s--slider button {
        width: 10em;
        height: 2.6em;
        position: relative;
        margin: 0 0 0 0.5em;
        background: var(--gray);
        border: none;
    }

    .s--slider button::before {
        content: '';
        position: absolute;
        width: 5.3em;
        height: 2.33em;
        background: #fff;
        top: 0.13em;
        right: 2.5em;
        left: 0.13em;
        transition: transform 0.3s;
    }

    .s--slider button[aria-checked='true']{
        background-color: var(--accent-color)
    }

    .s--slider button[aria-checked='true']::before{
        transform: translateX(4.5em);
        transition: transform 0.3s;
    }

    .s--slider button:focus {
        box-shadow: 0 0px 0px 1px var(--accent-color);
    }

    .s--slider button {
        border-radius: 2.5em;
    } 

    .s--slider button::before {
        border-radius: 2.5em;
    }

    .s--slider button:focus {
        box-shadow: 0 0px 8px var(--accent-color);
        border-radius: 2.5em;
    }

</style>