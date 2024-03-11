import express from "express";
import "express-async-errors";
import morgan from "morgan";
import multer from "multer";
import "./passport.js";
import { getAll, getOneById, create, updateById, deleteById, createImage, } from "./controllers/planets.js";
import { signUp, logIn, logOut } from "./controllers/users.js";
import authorize from "./authorize.js";
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
const port = 3001;
app.use(morgan("dev"));
app.use(express.json());
app.get("/api/planets", getAll);
app.get("/api/planets/:id", getOneById);
app.post("/api/planets", create);
app.put("/api/planets/:id", updateById);
app.delete("/api/planets/:id", deleteById);
app.post("/api/planets/:id/image", upload.single("image"), createImage);
app.post("/api/users/signup", signUp);
app.post("/api/users/login", logIn);
app.get("/api/users/logout", authorize, logOut);
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
