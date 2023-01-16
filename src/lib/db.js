import Database from 'better-sqlite3';
import fs from 'node:fs';
import { v4 as uuidv4 } from 'uuid';

let db = new Database(fs.readFileSync("blog.db")); 

/** Returns all posts from the DB, sorted by date. */
export let getPosts = () => {
    const stmt = db.prepare("select * from BlogPost");
    let posts = stmt.all();
    posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return Promise.resolve(posts);
};

/** Returns a sigle post from the DB.
 * If no post is found, null is returned.
 * @param {string} title
 */
export let getPost = (title) => {
    const stmt = db.prepare("select * from BlogPost where title = ?");
    let post = stmt.get(title);
    if (!post) return Promise.resolve(null);

    return Promise.resolve(post);
};

/** Returns a sigle user from the DB.
 * If no user is found, null is returned.
 * @param {string} email 
 */
export const getUserByEmail = async (email) => {
    const stmt = db.prepare("select * from User where email = ?");
    let user = stmt.get(email);
    if (!user) return Promise.resolve(null);

    return Promise.resolve(user);
};

/** Creates a new session for a user in the DB. 
 * Returns the session object.
 * @param {string} email 
 */
export const createSession = (email) => {
    const session = {
        id: uuidv4(),
        email,
    };
    const stmt = db.prepare("insert into Session (id, email) values (?, ?)");
    stmt.run(session.id, session.email);

    return Promise.resolve(session);
};

/** Returns a sigle session from the DB.
 * If no session is found, null is returned.
 * @param {string} id
 */
export const getSession = (id) => {
    const stmt = db.prepare("select * from Session where id = ?");
    let session = stmt.get(id);
    if (!session) return Promise.resolve(null);

    return Promise.resolve(session);
};

/** Removes a session from the DB.
 * If no session is found, an error is returned.
 * @param {string} id
 */
export const removeSession = (id) => {
    const getStmt = db.prepare("select * from Session where id = ?");
    let session = getStmt.get(id);
    if (!session) return Promise.resolve(new Error('Session not found'));

    const delStmt = db.prepare("delete from Session where id = ?");
    delStmt.run(id);

    return Promise.resolve(session);
}
