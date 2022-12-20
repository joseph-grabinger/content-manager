import { error } from '@sveltejs/kit';
import { db } from '$lib/db';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    console.log('params', params);

    const stmt = db.prepare("select * from BlogPost where title = ?");
    const post = stmt.get(params.post);

    console.log("post: " + post);

    if (!post) {
        throw error(404, 'Not found');
    }

    return { post };
}