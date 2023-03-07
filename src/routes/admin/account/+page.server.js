import { invalid, redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';
import * as bcrypt from 'bcrypt';
import { getUserByEmail, updateUserEmail, updateUserPassword, getSession, removeSession, createSession } from '$lib/db';


/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const session = event.cookies.get('session');
    if (!session) {
        throw redirect(302, '/login');
    }

    const dbSession = await getSession(session);
    if (!dbSession) {
        throw redirect(302, '/login');
    }

    const user = await getUserByEmail(dbSession['email']);

    return {
        session: session,
        user: {
            email: user.email,
            name: user.name,
        },
    };
}

export const actions = {
    changeEmail: async ({ request, cookies }) => {
        const form = await request.formData();
        const email = form.get('email');
        const password = form.get('password');
        const newEmail = form.get('newEmail');

        if (!email || !password || !newEmail) 
            return invalid(400, { email, missing: true });

        if (typeof email !== 'string' || typeof password !== 'string'
            || typeof newEmail !== 'string')
            return invalid(400, { email, incorrect: true });

        const user = await getUserByEmail(email);
        const passwordMatch = user && (await bcrypt.compare(password, user.password));

        if (!user || !passwordMatch)
            return invalid(400, { email, incorrect: true });

        await updateUserEmail(email, newEmail);

        const session = cookies.get('session');

        if (session) {
            await removeSession(session);
        }

        const { id } = await createSession(newEmail);
        cookies.set('session', id, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: !dev,
            maxAge: 60 * 60 * 24 // 1 day
        });
    },

    changePassword: async ({ request, cookies }) => {
        const form = await request.formData();
        const oldPassword = form.get('oldPassword');
        const newPassword = form.get('newPassword');
        const confirmPassword = form.get('confirmPassword');

        if (!oldPassword || !newPassword || !confirmPassword) 
            return invalid(400, { newPassword, missing: true });

        if (typeof oldPassword !== 'string' || typeof newPassword !== 'string'
            || typeof confirmPassword !== 'string' || newPassword !== confirmPassword)
            return invalid(400, { newPassword, incorrect: true });
        
        const session = cookies.get('session');

        if (!session) {
            throw redirect(302, '/login');
        }

        const dbSession = await getSession(session);

        const user = await getUserByEmail(dbSession.email);
        const passwordMatch = user && (await bcrypt.compare(oldPassword, user.password));

        if (!user || !passwordMatch)
            return invalid(400, { newPassword, incorrect: true });
        
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(newPassword, salt);

        await updateUserPassword(user.email, hash);
    },
};