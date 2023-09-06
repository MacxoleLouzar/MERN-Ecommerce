import express from "express";

import { getAllUser, login, register } from "../controller/UserController.js";

const route = express.Router();

route.get("/", getAllUser);
route.post("/register", register);
route.post("/login", login);

export default route;
