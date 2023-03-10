import { fail, redirect } from '@sveltejs/kit';
import { getSession, createPost } from '$lib/db';

export const actions = {
    createPost: async ({ request, cookies }) => {
        const session = cookies.get('session');
        if (!session) {
            return fail(401, { session, missing: true });
        }

        const dbSession = await getSession(session);
        if (!dbSession) {
            return fail(401, { session, missing: true });
        }

        const form = await request.formData();
        const title = form.get('title');
        const author = form.get('author');
        const content = form.get('content');

        if (!title || !author || !content)
            return fail(400, { title, author, content, missing: true });

        if (typeof title !== 'string' || typeof author !== 'string' || typeof content !== 'string')
            return fail(400, { title, author, content, incorrect: true });

        await createPost(author, title, "2022-12-18", "This is an excerpt!", content);
        // TODO: Add date and excerpt

        console.log("Post created");

        throw redirect(303, '/blog');
    },
};