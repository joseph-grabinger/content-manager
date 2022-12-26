import { redirect } from '@sveltejs/kit';
import { getSession, getPosts } from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const session = event.cookies.get('session');
    if (!session) {
        throw redirect(302, '/login');
    }

    const dbSession = getSession(session);
    if (!dbSession) {
        throw redirect(302, '/login');
    }

    const posts = getPosts();
    console.log("Total posts : " + posts.length);

    // posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return { 
        posts : posts, 
        session: session 
    };
}