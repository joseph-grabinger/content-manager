import Database from "better-sqlite3";
import fs from "node:fs";

export let db = new Database(fs.readFileSync("blog.db"));