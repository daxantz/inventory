const db = require("../db/queries");
const data = require("../data");
exports.publisherCreateGet = (req, res) => {
  res.render("publisherCreateForm", { links: data.links });
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

exports.publisherListGet = async (req, res) => {
  try {
    const publishers = await db.getAllPublishers();
    res.render("allPublishers", { publishers: publishers, links: data.links });
  } catch (error) {
    console.log(error);
  }
};

exports.publisherGet = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const idNum = Number(id);
    const publisher = await db.getPublisher(idNum);
    const manga = await db.getPublisherManga(idNum);
    console.log(manga);

    res.render("publisherDetails", { publisher: publisher, manga: manga });
  } catch (error) {
    console.log(error);
  }
};
