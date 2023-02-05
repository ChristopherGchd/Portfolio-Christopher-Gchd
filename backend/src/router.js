const express = require("express");

const router = express.Router();

const ProjectsControllers = require("./controllers/projectsController");

router.get("/home", ProjectsControllers.browse);
router.get("/projects", ProjectsControllers.browse);
router.get("/projects/:id", ProjectsControllers.read);

module.exports = router;
