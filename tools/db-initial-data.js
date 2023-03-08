import { argv } from 'node:process';
import fs from 'node:fs';
import Database from 'better-sqlite3';
import * as bcrypt from 'bcrypt';


const count = argv.length;

if (count != 5 && count != 6) {
    console.log("Usage: node db-initial-data.js \"<name>\" \"<email>\" \"<password>\"");
    process.exit(1);
}

let name, email, password;

if (count == 5) {
    name = argv[2];
    email = argv[3];
    password = argv[4];
} else {
    name = argv[2] + " " + argv[3];
    email = argv[4];
    password = argv[5];
}

const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password, salt);

const path = "dev.db";

let db = new Database(fs.readFileSync(path));

const stmt = db.prepare("insert into User (name, email, password) values (?, ?, ?)");
let user = stmt.run(name, email, hash);
if (!user) {
    console.error(new Error("Error creating user"));
    process.exit(1);
}

await db.backup(path);

process.exit(0);
