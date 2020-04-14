const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // day: {type: Date},
    // exercises: [
    //     {
    //         type: {type: String},
    //         name: {type: String},
    //         duration: {type: Number},
    //         weight: {type: Number},
    //         reps: {type: Number},
    //         sets: {type: Number},
    //         distance: {type: Number}
    //     }
    // ]
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter a workout type!"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter a workout name!"
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            }
        }
    ],
    day: {
        type: Date,
        default: Date.now()
    }
});
   
WorkoutSchema.virtual('totalDuration').get(function (){

    // practice array methods by using one instead of for loop
    let total = 0;
    for(i=0; i < this.exercises.length; i++){
        // total = total + this.exercises[i].duration;
        total += this.exercises[i].duration;
    }
    return total;
});



WorkoutSchema.set('toJSON', {virtuals: true});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;