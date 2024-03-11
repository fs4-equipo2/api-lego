import express from "express";
import "express-async-errors";
import morgan from "morgan";
import multer from "multer";
import "./passport.js";
import { signUp, logIn, logOut } from "./controllers/users.js";
import authorize from "./authorize.js";
import cors from 'cors';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });
const app = express();
const port = 3002;
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.post("/api/users/signup", signUp);
app.post("/api/users/login", logIn);
app.get("/api/users/logout", authorize, logOut);
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
