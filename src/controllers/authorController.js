const db = require("../db/queries");
const data = require("../data.js");
exports.authorCreateGet = (req, res) => {
  res.render("authorCreateForm", { links: data.links });
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
