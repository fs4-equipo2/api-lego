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
    `INSERT INTO users (username, password) VALUES ('jose1234', 'abc123')`
  );
  await db.none(
    `INSERT INTO users (username, password) VALUES ('maria1234', '123abc')`
  );
  await db.none(
    `INSERT INTO users (username, password) VALUES ('denise1234', 'a1b2c3')`
  );
  await db.none(
    `INSERT INTO users (username, password) VALUES ('jaime1234', '12abc3')`
  );
  await db.none(
    `INSERT INTO users (username, password) VALUES ('camila1234', '1a23bc')`
  );
  await db.none(
    `INSERT INTO users (username, password) VALUES ('martin1234', 'abc123')`
  );
};

setUpDb();

export { db };
