import { error } from '@sveltejs/kit';
import { getNewsStory } from '$lib/db';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const news = getNewsStory(params.stroy);
    if (!news) {
        throw error(404, 'Not found');
    }

    return { news };
}
