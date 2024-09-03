const db = require("../db/queries");

exports.mangaCreateGet = async (req, res) => {
  console.log(req.body);
  const authors = await db.getAllAuthors();
  const publishers = await db.getAllPublishers();
  const genres = await db.getGenres();
  res.render("mangaCreateForm", {
    authors: authors,
    publishers: publishers,
    genres: genres,
  });
};

exports.mangaCreatePost = async (req, res) => {
  console.log(req.body);

  // add to database
  try {
    const { title, release_date, publisher, author, genre } = req.body;
    await db.insertManga(title, release_date, publisher, author, genre);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.mangaListGet = async (req, res) => {
  try {
    const allManga = await db.getAllManga();
    res.render("showManga", { manga: allManga });
  } catch (error) {
    console.log(error);
  }
};

exports.mangaGet = async (req, res) => {
  console.log(req.params.id);
  try {
    const itemId = req.params.id;
    const mangaId = parseInt(itemId);

    const manga = await db.getManga(mangaId);

    res.render("mangaDetailsPage", { manga: manga });
  } catch (error) {
    console.log(error);
  }
};
