import { error } from '@sveltejs/kit';
import { convertDate } from '$lib/utils';


/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    console.log('params', params);
    const path = `../../../lib/blog-posts/${params.post}.md`;
    const filePath = `../../../lib/blog-posts/${params.post}/+page.md`;
    
    const post = await import(filePath);

    return {
        ...post.metadata,
        path: path.slice(2, -3),
        published: convertDate(post.metadata.date),
        content: post.default
    };

}