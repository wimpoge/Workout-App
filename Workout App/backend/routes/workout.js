const express = require('express')
const { 
    getAllWorkout, 
    getSingleWorkout, 
    createWorkout,
    deleteWorkout,
    updateWorkout } 
    = require('../controllers/workoutController')

const router = express.Router()

// GET all method
router.get('/', getAllWorkout)

// GET a single method
router.get('/:id', getSingleWorkout)

// POST a new method
router.post('/', createWorkout)

// DELETE a new method
router.delete('/:id', deleteWorkout)

// UPDATE a new method
router.patch('/:id', updateWorkout)

module.exports = router