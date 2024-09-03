const db = require("../db/queries");

exports.mangaCreateGet = async (req, res) => {
  console.log(req.body);
  const authors = await db.getAllAuthors();
  const publishers = await db.getAllPublishers();
  res.render("mangaCreateForm", { authors: authors, publishers: publishers });
};

exports.mangaCreatePost = async (req, res) => {
  console.log(req.body);

  // add to database
  try {
    const { title, release_date, publisher, author } = req.body;
    await db.insertManga(title, release_date, publisher, author);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
