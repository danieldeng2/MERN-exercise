const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

router.route("/:id").put((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});

router.route("/").post((req, res) => {
  const newExercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date.parse(req.body.date),
  });

  newExercise
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
