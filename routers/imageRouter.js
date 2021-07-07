import { home } from "../controllers/userController";
import express from "express";
import routes from "../routes";
import { imageDetail } from "../controllers/imageController";

const imageRouter = express.Router();

/* GET home page. */
imageRouter.get(routes.home, home);
imageRouter.get(routes.imageDetail(), imageDetail);

export default imageRouter;
