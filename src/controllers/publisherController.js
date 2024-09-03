const db = require("../db/queries");

exports.publisherCreateGet = (req, res) => {
  res.render("publisherCreateForm");
};

exports.publisherCreatePost = async (req, res) => {
  console.log(req.body);

  // add to database
  try {
    const { name, date_established } = req.body;

    await db.insertPublisher(name, date_established);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
