import pgPromise from "pg-promise";

const pgp = pgPromise();

const db = pgp("postgres://martingergov:phonicenvelope@localhost:5432/planets");

const setUpDb = async () => {
  await db.none(`
    DROP TABLE IF EXISTS users;

    CREATE TABLE users (
        id SERIAL NOT NULL PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT
    )`);

  await db.none(
    `INSERT INTO users (username, password) VALUES ('usuario', 'ususario')`
  );
};

setUpDb();

export { db };
