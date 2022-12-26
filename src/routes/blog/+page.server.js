import { getPosts } from '$lib/db';

export async function load() {
    const posts = getPosts();

    return { posts };
}
