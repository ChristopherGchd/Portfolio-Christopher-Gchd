const express = require("express");

const router = express.Router();

const ProjectsControllers = require("./controllers/projectsController");

router.get("/home", ProjectsControllers.browse);

module.exports = router;
