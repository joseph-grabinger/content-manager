import { redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { getSession, removeSession, getPosts, getUserByEmail } from '$lib/db';

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

    const posts = getPosts();
    console.log("Total posts : " + posts.length);
    // posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    const user = await getUserByEmail(dbSession['email']);

    return { 
        posts : posts, 
        session: session,
        user: {
            email: user.email,
            name: user.name,
        },
    };
}

export const actions = {
    logout: async ({ cookies }) => {
        const session = cookies.get('session');
        console.log("Logout: ", session);
        if (session) {
            await removeSession(session);
            cookies.set('session', '', {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: !dev,
                maxAge: 0
            });
        }
        throw redirect(307, '/login');
    }
};