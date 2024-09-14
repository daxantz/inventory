const db = require("../db/queries");
const data = require("../data.js");
exports.mangaCreateGet = async (req, res) => {
  console.log(req.body);
  const authors = await db.getAllAuthors();
  const publishers = await db.getAllPublishers();
  const genres = await db.getGenres();
  res.render("mangaCreateForm", {
    authors: authors,
    publishers: publishers,
    genres: genres,
    links: data.links,
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
    res.render("showManga", { manga: allManga, links: data.links });
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

    res.render("mangaDetailsPage", { manga: manga, links: data.links });
  } catch (error) {
    console.log(error);
  }
};

exports.updateFormGet = async (req, res) => {
  try {
    const manga = await db.getManga(Number(req.params.id));
    const authors = await db.getAllAuthors();
    const publishers = await db.getAllPublishers();
    res.render("mangaUpdateForm", {
      manga: manga,
      authors: authors,
      publishers: publishers,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.mangaUpdatePut = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const allManga = await db.getAllManga();
    console.log("the data", data);
    await db.updateManga(Number(id), data);
    res.redirect(`/manga/${id}`);
  } catch (error) {
    console.log(error);
  }
};
