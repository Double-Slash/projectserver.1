import { home } from "../controllers/userController";
import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

/* GET home page. */
globalRouter.get(routes.home, home);

export default globalRouter;
