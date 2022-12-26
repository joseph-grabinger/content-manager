import { error } from '@sveltejs/kit';
import { getPost } from '$lib/db';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    console.log('params', params);

    const post = getPost(params.post);
    if (!post) {
        throw error(404, 'Not found');
    }

    return { post };
}