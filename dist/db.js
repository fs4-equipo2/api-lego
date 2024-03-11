var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pgPromise from "pg-promise";
const pgp = pgPromise();
const db = pgp("postgres://postgres:lego1234@localhost:5432/legousuarios");
const setUpDb = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db.none(`
    DROP TABLE IF EXISTS users;

    CREATE TABLE users (
        id SERIAL NOT NULL PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT
    )`);
    yield db.none(`INSERT INTO users (username, password) VALUES ('jose1234', 'abc123')`);
    yield db.none(`INSERT INTO users (username, password) VALUES ('maria1234', '123abc')`);
    yield db.none(`INSERT INTO users (username, password) VALUES ('denise1234', 'a1b2c3')`);
    yield db.none(`INSERT INTO users (username, password) VALUES ('jaime1234', '12abc3')`);
    yield db.none(`INSERT INTO users (username, password) VALUES ('camila1234', '1a23bc')`);
    yield db.none(`INSERT INTO users (username, password) VALUES ('martin1234', 'abc123')`);
});
setUpDb();
export { db };
