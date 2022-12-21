import { redirect } from '@sveltejs/kit';
import { db } from '$lib/db';

export async function load({ session }) {
    if (!session?.user) throw redirect(302, '/login');

    const stmt = db.prepare("select * from BlogPost");
    let posts = stmt.all();

    console.log("Total posts : " + posts.length);

    posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return { 
        posts : posts, 
        user: session.user 
    };
}

// export async function load({ session }) {
//     if (!session?.user) {
//         return {
//             status: 302,
//             redirect: "/sign-in"
//         }
//     }
//     return {
//         props: {
//             user: session.user
//         }
//     };
// }