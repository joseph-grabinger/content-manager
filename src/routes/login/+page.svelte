<script>
	import { goto } from '$app/navigation';
	// import { session } from '$app/stores';

	let error;
    let email = '';
	let password = '';

	async function handleSubmit() {
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const body = await response.json();
		if (response.ok) {
			// session from getSession hook will otherwise not be set before navigation
			// that would trigger redirect from /protected back to /sign-in
			// $session = body;
			await goto('/admin');
		}
		error = body.message;
	}
</script>
<div class="mx-auto">
    <h1 class="text-2xl font-semibold text-start">Admin Log-In</h1>
    {#if error}
        <p class="mt-3 text-red-500 text-center font-semibold">{error}</p>
    {/if}
    <div id="form-container" class="container pt-4">
        <form on:submit|preventDefault={handleSubmit} >
            <div class="form-group flex flex-col">
                <label for="email" class="font-bold">Email</label>
                <input class="form-control" name="email" type="email" bind:value={email} required />
            </div>
            <div class="form-group flex flex-col">
                <label for="password" class="font-bold">Password</label>
                <input class="form-control" name="password" type="password" bind:value={password} required />
            </div>
            <button class="btn btn-primary" type="submit">Log In</button>
            
        </form>
    </div>
</div>

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