import express from "express";
import { Login, Logout, Register } from "../controller/user.js";

const routes = express.Router();

routes.post("/register", Register);
routes.post("/login",Login);
routes.get("/logout",Logout)

export default routes;
