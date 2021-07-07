import {
  home,
  postSearch,
  getSearch,
  postInfo,
  getInfo,
  allInfo
} from "../controllers/userController";
import express from "express";
import routes from "../routes";

const infoRouter = express.Router();

/* GET home page. */
infoRouter.get(routes.home, home);
infoRouter.get(routes.search, getSearch);
infoRouter.post(routes.search, postSearch);
infoRouter.get(routes.get, getInfo);
infoRouter.post(routes.get, postInfo);
infoRouter.get(routes.all, allInfo);

export default infoRouter;
