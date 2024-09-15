const db = require("../db/queries");
const data = require("../data.js");
exports.authorCreateGet = (req, res) => {
  res.render("authorCreateForm", { links: data.links });
};
exports.authorListGet = async (req, res) => {
  try {
    const authors = await db.getAllAuthors();
    if (!authors) {
      res.status(404).send("no authors currently exist");
    }
    res.render("allAuthors", { authors: authors, links: data.links });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

exports.authorGet = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await db.getAuthor(Number(id));
    console.log(author);
    res.render("authorDetails", { author: author, links: data.links });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

exports.authorCreatePost = async (req, res) => {
  console.log(req.body);

  // add to database
  try {
    const { first_name, last_name, birth_date } = req.body;
    const convertedDate = new Date(birth_date);
    await db.insertAuthor(first_name, last_name, convertedDate);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
