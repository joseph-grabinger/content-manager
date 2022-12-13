import { error } from '@sveltejs/kit';
import { convertDate } from '$lib/utils';

export async function load() {
    const allPostFiles = import.meta.glob('../../lib/blog-posts/*/*.{svx,md}', { 
        eager: true,
    });
    const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
        const postPath = path.slice(21, -9);
        return { ...post.metadata, path: postPath, published: convertDate(post.metadata.date) };
    });
    const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (!posts.length) {
        throw error(404, 'Not found');
    }
    return { posts };
}
