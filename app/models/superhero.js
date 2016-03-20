//Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

//Defines the superhero schema
var SuperheroSchema = new Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    superPowers: {type: String, required: true},
    picture: {type: Schema.Types.Mixed, required: true},
    morePictures: Schema.Types.Mixed,
    createdAt: {type: Date, default: Date.now},    
});

// Sets the createdAt parameter equal to the current time
SuperheroSchema.pre('save', function(next){
    now = new Date();
    if(!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

//Exports the SuperheroSchema for use elsewhere.
module.exports = mongoose.model('superhero', SuperheroSchema);