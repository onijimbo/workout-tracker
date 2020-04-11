const db = require('../models');
const express = require('express');
const router = express.Router();

router.route('/api/workouts')
    .get(function(req, res){
        
        db.Workout.find({})
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);

        })
        .catch(err =>{
            res.json(err);
        });
    })
    .post(function(req,res){

    })
    .put(function(req, res){

    });

    module.exports = router;