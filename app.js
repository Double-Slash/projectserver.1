var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var sassMiddleware = require("node-sass-middleware");

/////ROUTER/////////////////////////////////
import globalRouter from "./routers/globalRouter";
import infoRouter from "./routers/infoRouter";
import imageRouter from "./routers/imageRouter";
import videoRouter from "./routers/videoRouter";
///////////////////////////////////////////////
import routes from "./routes";
import { localMiddleware } from "./localMiddleware";
/////routes
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.use("/images", express.static(path.join(__dirname, "uploads/images")));
app.set("view engine", "pug");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
  })
);
app.use(express.static(path.join(__dirname, "public")));
//localmiddleware
app.use(localMiddleware);

////////LINK//////////////////////////
app.use(routes.home, globalRouter);
app.use(routes.info, infoRouter);
app.use(routes.image, imageRouter);
app.use(routes.video, videoRouter);
/////////////////////////////////////

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
