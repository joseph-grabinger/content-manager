import Database from 'better-sqlite3';
import { migrate } from '@blackglory/better-sqlite3-migrations';
import fs from 'node:fs';


const migrations = [
    {
        version: 1,
        up: `
            create table if not exists BlogPost (
                id integer primary key autoincrement,
                author text not null,
                title text not null unique,
                excerpt text,
                date text not null,
                content text not null
            );

            create table if not exists User (
                id integer primary key autoincrement,
                name text not null,
                email text not null unique,
                password text not null
            );

            create table if not exists Session (
                id text not null,
                email text not null
            );
        `,
        down: `
            drop table if exists BlogPost;

            drop table if exists User;

            drop table if exists Session;
        `,
    },
];

const path = "dev.db";

if (!fs.existsSync(path)) {
    fs.writeFileSync(path, "");
}

let db = new Database(fs.readFileSync(path));

migrate(db, migrations);

await db.backup(path);

process.exit(0);
