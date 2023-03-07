import Database from 'better-sqlite3';
import { migrate } from '@blackglory/better-sqlite3-migrations';
import fs from 'node:fs';

console.log("Running migrations");

const migrations = [
    {
        version: 1,
        up: `
            create table if not exists BlogPost (
                id integer primary key autoincrement,
                title text not null,
                date text not null,
                content text not null
            );

            create table if not exists User (
                id integer primary key autoincrement,
                email text not null,
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

let db = new Database(fs.readFileSync("../../test.db"));

migrate(db, migrations, 1);

db.backup("../../test.db");
