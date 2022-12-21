import { parse } from 'cookie';
import { getSession as getSessionFromApi } from '$lib/db';

/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, resolve }) {
    const cookies = parse(request.headers.cookie || '');

    if (cookies.session_id) {
        const session = await getSessionFromApi(cookies.session_id);
        if (session) {
            request.locals.user = { email: session.email };
            return resolve(request);
        }
    }

    request.locals.user = null;
    return resolve(request);
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
    return request?.locals?.user
        ? {
                user: {
                    email: request.locals.user.email,
                },
        }
        : {};
}