const { Router } = require("express");
const mangaController = require("../controllers/mangaController"); // insert path to manga controller
const mangaRouter = Router();

// mangaRouter.get("/", mangaController.mangaListGet); // get all manga
// mangaRouter.get("/manga/:id", mangaController.mangaGet); // get specific manga
mangaRouter.get("/manga", mangaController.mangaCreateGet); //get the manga creation form
mangaRouter.post("/manga", mangaController.mangaCreatePost); // create a new manga entry
// mangaRouter.put("/manga/:id", mangaController.mangaUpdatePut); // update a single manga
// mangaRouter.delete("/manga/:id", mangaController.mangaDelete); // delete a single manga

module.exports = mangaRouter;
