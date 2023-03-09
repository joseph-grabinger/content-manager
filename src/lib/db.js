import Database from 'better-sqlite3';
import fs from 'node:fs';
import { v4 as uuidv4 } from 'uuid';

let db = new Database(fs.readFileSync("blog.db")); 

/** Creates a new post in the DB. 
 * Returns the post object.
 * @param {string} author
 * @param {string} title
 * @param {string} date
 * @param {string} excerpt
 * @param {string} content
 */
export let createPost = (author, title, date, excerpt, content) => {
    const stmt = db.prepare("insert into BlogPost (author, title, date, excerpt, content) values (?, ?, ?, ?, ?)");
    let post = stmt.run(author, title, date, excerpt, content);

    return Promise.resolve(post);
};

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
export const getUserByEmail = (email) => {
    const stmt = db.prepare("select * from User where email = ?");
    let user = stmt.get(email);
    if (!user) return Promise.resolve(null);

    return Promise.resolve(user);
};

/** Updates a users email in the DB.
 *  If no user is found, an error is returned.
 * @param {string} email
 * @param {string} newEmail
 */
export const updateUserEmail = (email, newEmail) => {
    const stmt = db.prepare("update User set email = ? where email = ?");
    let user = stmt.run(newEmail, email);
    if (!user) return Promise.reject(new Error("User not found"));

    return Promise.resolve(user);
};

/** Updates a users password in the DB.
 * If no user is found, an error is returned.
 * @param {string} email
 * @param {string} password
 */
export const updateUserPassword = (email, password) => {
    const stmt = db.prepare("update User set password = ? where email = ?");
    let user = stmt.run(password, email);
    if (!user) return Promise.reject(new Error("User not found"));

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
    if (!session) return Promise.reject(new Error('Session not found'));

    const delStmt = db.prepare("delete from Session where id = ?");
    delStmt.run(id);

    return Promise.resolve(session);
}
