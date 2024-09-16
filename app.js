require("dotenv").config();

const express = require("express");
const path = require("path");
const db = require("./src/db/queries.js");
const app = express();
const methodOverride = require("method-override");
const data = require("./src/data.js");
const mangaRouter = require("./src/routes/mangaRouter.js");
const authorRouter = require("./src/routes/authorRouter.js");
const publisherRouter = require("./src/routes/publisherRouter.js");
const indexRouter = require("./src/routes/index.js");
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(indexRouter);

app.use(mangaRouter);
app.use(authorRouter);
app.use(publisherRouter);

app.listen(4000, (req, res) => {
  console.log("Server running on port 4000");
});
