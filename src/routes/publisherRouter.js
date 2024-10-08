const { Router } = require("express");
const publisherController = require("../controllers/publisherController"); // insert path to publisher controller
const publisherRouter = Router();

publisherRouter.get("/publishers", publisherController.publisherListGet); // get all publisher
publisherRouter.get("/publishers/:id", publisherController.publisherGet); // get specific publisher
publisherRouter.get("/add-publisher", publisherController.publisherCreateGet); //get the publisher creation form
publisherRouter.post("/publisher", publisherController.publisherCreatePost); // create a new publisher entry
// publisherRouter.put("/publisher/:id", publisherController.publisherUpdatePut); // update a single publisher
// publisherRouter.delete("/publisher/:id", publisherController.publisherDelete); // delete a single publisher

module.exports = publisherRouter;
