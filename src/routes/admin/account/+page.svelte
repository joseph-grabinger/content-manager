<script>
    import { convertNameToInitials } from '$lib/utils.js';
    import Modal from '$lib/components/modal/Modal.svelte';

    export let data;
    export let form;

    let showEmailModal = false;
    let showPasswordModal = false;
</script>

<div class="max-w-lg mx-auto lg:max-w-7xl">
    <h2 class="pt-3 border-b border-b-gray-200 pb-2 text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl">Account Settings</h2>
    <div class="flex justify-between pt-10">
        <div class="flex">
            <div class="avatar">{convertNameToInitials(data.user.name)}</div>
            <div class="flex flex-col justify-center px-4">
                <h3 class="text-lg font-semibold text-gray-900">{data.user.name}</h3>
                <p class="text-sm text-gray-500">{data.user.email}</p>
            </div>
        </div>
        <div class="flex">
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24">
                <path fill="#66b942" d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />
            </svg>
            <span class="py-2 text-ml font-semibold">Admin</span>
        </div>
    </div>
    <div class="flex justify-evenly py-6">
        <button 
            class="mt-8 inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            on:click={() => (showEmailModal = true)}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20px"
                height="20px"
                viewBox="0 0 24 24">
                <path fill="#444444" d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" />
            </svg>
            <span>Change Email</span>
        </button>
        <button 
            class="mt-8 inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            on:click={() => (showPasswordModal = true)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24">
                <path fill="#444444" d="M12.63,2C18.16,2 22.64,6.5 22.64,12C22.64,17.5 18.16,22 12.63,22C9.12,22 6.05,20.18 4.26,17.43L5.84,16.18C7.25,18.47 9.76,20 12.64,20A8,8 0 0,0 20.64,12A8,8 0 0,0 12.64,4C8.56,4 5.2,7.06 4.71,11H7.47L3.73,14.73L0,11H2.69C3.19,5.95 7.45,2 12.63,2M15.59,10.24C16.09,10.25 16.5,10.65 16.5,11.16V15.77C16.5,16.27 16.09,16.69 15.58,16.69H10.05C9.54,16.69 9.13,16.27 9.13,15.77V11.16C9.13,10.65 9.54,10.25 10.04,10.24V9.23C10.04,7.7 11.29,6.46 12.81,6.46C14.34,6.46 15.59,7.7 15.59,9.23V10.24M12.81,7.86C12.06,7.86 11.44,8.47 11.44,9.23V10.24H14.19V9.23C14.19,8.47 13.57,7.86 12.81,7.86Z" />
            </svg>
            <span>Change Password</span>
        </button>
    </div>
</div>

<Modal bind:showModal={showEmailModal}>
    <h2 slot="header">Change Email</h2>

	<form method="POST" action="?/changeEmail">
        <div class="form-group flex flex-col">
            <label class="text-gray-600 text-sm" for="email">Email</label>
            <input name="email" type="email" value={form?.email ?? ''} required />
        </div>
        <div class="form-group flex flex-col grow-0">
            <label class="text-gray-600 text-sm" for="password">Password</label>
            <input type="password" id="password" name="password" required>
        </div>
        <div class="form-group flex flex-col grow-0">
            <label class="text-gray-600 text-sm" for="newEmail">New Email</label>
            <input type="email" id="newEmail" name="newEmail" required>
        </div>
        <button type="submit" class="btn">Continue</button>
    </form>
</Modal>

<Modal bind:showModal={showPasswordModal}>
    <h2 slot="header">Change Password</h2>

    <form method="POST" action="?/changePassword">
        <div class="form-group flex flex-col grow-0">
            <label class="text-gray-600 text-sm" for="oldPassword">Old Password</label>
            <input type="password" id="oldPassword" name="oldPassword" required>
        </div>
        <div class="form-group flex flex-col grow-0">
            <label class="text-gray-600 text-sm" for="newPassword">New Password</label>
            <input type="password" id="newPassword" name="newPassword" required>
        </div>
        <div class="form-group flex flex-col grow-0">
            <label class="text-gray-600 text-sm" for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>
        </div>
        <button type="submit" class="btn">Continue</button>
    </form>
</Modal>

<style>
    .avatar {
        /* Rounded border */
        border-radius: 50%;
        /* Bachground color */
        background-color: #7d838a;
        /* Center the content */
        align-items: center;
        display: flex;
        justify-content: center;
        /* Size */
        height: 4rem;
        width: 4rem;
        /* Font */
        font-size: 1.8rem;
        font-weight: 700;
        color: #fff;
    }

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