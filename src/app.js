require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

const mangaRouter = require("../src/routes/mangaRouter");
const authorRouter = require("./routes/authorRouter");
const publisherRouter = require("./routes/publisherRouter");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("it works ");
});

app.use(mangaRouter);
app.use(authorRouter);
app.use(publisherRouter);

app.listen(3000, (req, res) => {
  console.log("Server running on port 3000");
});
