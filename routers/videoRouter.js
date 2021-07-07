import { home } from "../controllers/userController";
import express from "express";
import routes from "../routes";
import { videoDetail } from "../controllers/videoController";

const videoRouter = express.Router();

/* GET home page. */
videoRouter.get(routes.home, home);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
