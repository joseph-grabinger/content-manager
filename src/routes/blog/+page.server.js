import { db } from '$lib/db';

export async function load() {
    const stmt = db.prepare("select * from BlogPost");
    let posts = stmt.all();

    console.log("Total posts : " + posts.length);

    posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return { posts };
}
