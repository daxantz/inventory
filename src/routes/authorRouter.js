const { Router } = require("express");
const authorController = require("../controllers/authorController"); // insert path to author controller
const authorRouter = Router();

authorRouter.get("/authors", authorController.authorListGet); // get all author
authorRouter.get("/authors/:id", authorController.authorGet); // get specific author
authorRouter.get("/add-author", authorController.authorCreateGet); //get the author creation form
authorRouter.post("/author", authorController.authorCreatePost); // create a new author entry
// authorRouter.put("/author/:id", authorController.authorUpdatePut); // update a single author
// authorRouter.delete("/author/:id", authorController.authorDelete); // delete a single author

module.exports = authorRouter;
