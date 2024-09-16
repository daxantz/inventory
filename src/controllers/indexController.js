const db = require("../db/queries");
const data = require("../data.js");

exports.indexGet = async (req, res) => {
  try {
    const allManga = await db.getAllManga();
    res.render("home", { manga: allManga, links: data.links });
  } catch (error) {
    console.log(error);
  }
};
