const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all method
router.get("/", getWorkouts);

// GET a single method
router.get("/:id", getWorkout);

// POST a new method
router.post("/", createWorkout);

// DELETE a new method
router.delete("/:id", deleteWorkout);

// UPDATE a new method
router.patch("/:id", updateWorkout);

module.exports = router;
