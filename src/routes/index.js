const { Router } = require("express");
const indexController = require("../controllers/indexController"); // insert path to author controller
const indexRouter = Router();

indexRouter.get("/", indexController.indexGet);

module.exports = indexRouter;
