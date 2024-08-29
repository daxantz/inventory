const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("it works ");
});

app.listen(3000, (req, res) => {
  console.log("Server running on port 3000");
});
