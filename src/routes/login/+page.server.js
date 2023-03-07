import { invalid, redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';
import * as bcrypt from 'bcrypt';
import { createSession, getUserByEmail } from '$lib/db';


export const actions = {
    login: async ({ request, cookies }) => {
        const form = await request.formData();
        const email = form.get('email');
        const password = form.get('password');

        if (!email || !password) return invalid(400, { email, missing: true });

        if (typeof email !== 'string' || typeof password !== 'string')
            return invalid(400, { email, incorrect: true });

        const user = await getUserByEmail(email);
        const passwordMatch = user && (await bcrypt.compare(password, user.password));

        if (!user || !passwordMatch) 
            return invalid(400, { email, incorrect: true });

        const { id } = await createSession(email);
        cookies.set('session', id, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: !dev,
            maxAge: 60 * 60 * 24 // 1 day
        });
        throw redirect(307, '/admin');
    },
};
