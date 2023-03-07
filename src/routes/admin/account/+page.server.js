import { redirect } from '@sveltejs/kit';

import { getSession, getUserByEmail } from '$lib/db';


/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const session = event.cookies.get('session');
    if (!session) {
        throw redirect(302, '/login');
    }

    const dbSession = await getSession(session);
    if (!dbSession) {
        throw redirect(302, '/login');
    }

    const user = await getUserByEmail(dbSession['email']);

    return {
        session: session,
        user: {
            email: user.email,
            name: user.name,
        },
    };
}

export const actions = {
    // TODO : Implement these actions
    changeEmail: async ({ request, cookies }) => {},
    changePassword: async ({ request, cookies }) => {},
};