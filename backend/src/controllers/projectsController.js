const models = require("../models");

const browse = (req, res) => {
  models.project
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postAdvice = (req, res) => {
  models.project
    .insert(req.body)
    .then(([result]) => {
      res
        .location(`/projects/${req.params.id}/projet/${result.insertId}`)
        .status(201)
        .json(result.insertId);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  postAdvice,
};
