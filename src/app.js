require("dotenv").config();

const express = require("express");
const path = require("path");
const db = require("./db/queries");
const app = express();
const methodOverride = require("method-override");
const data = require("./data.js");
const mangaRouter = require("../src/routes/mangaRouter");
const authorRouter = require("./routes/authorRouter");
const publisherRouter = require("./routes/publisherRouter");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const allManga = await db.getAllManga();
  res.render("home", { manga: allManga, links: data.links });
});

app.use(mangaRouter);
app.use(authorRouter);
app.use(publisherRouter);

app.listen(4000, (req, res) => {
  console.log("Server running on port 4000");
});
