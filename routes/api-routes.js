const db = require('../models');
const express = require('express');
const router = express.Router();

router.route('/api/workouts')
    .get(function(req, res){
        
        db.Workout.find({})
        .then(data => {
            

            res.json(data);

        })
        .catch(err =>{
            res.json(err);
        });
    })
    .post(function(req,res){
        console.log('testing');
        db.Workout.create(new db.Workout(req.body))
        .then(newWorkout =>{
            console.log(newWorkout);
            res.send(newWorkout);
        })
        .catch(err => {
            res.json(err);
        });

    });

router.put('/api/workouts/:id', (req, res) =>{
    db.Workout.findByIdAndUpdate(req.params.id,
        {
            $push: {
                'exercises': req.body
            }
        },
        {
            new: true
        }
        ).then(dbUpdateWorkout => {
            res.json(dbUpdateWorkout)
        })
        .catch(err => {
            res.json(err);
        })
        

});    

router.get('/api/workouts/range', (req, res)=>{
    db.Workout.find({})
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.json(err)
    });
});
    

    module.exports = router;