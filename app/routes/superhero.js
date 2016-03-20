//Dependencies
var mongoose        = require('mongoose');
var Superhero       = require('../models/superhero');
//App routes
module.exports = function() {
	return {
		/*
		 * Get route to retrieve all the superheroes.
		 */
		getAll : function(req, res){
			//Query the DB and if no errors, send all the superheroes
			var query = Superhero.find({});
			query.exec(function(err, superheroes){
				if(err) res.send(err);
				//If no errors, send them back to the client
				res.json(superheroes);
			});
		},
		/*
		 * Post route to save a new superhero into the DB.
		 */
		post: function(req, res){
			//Creates a new superhero
			var newSuperhero = new Superhero(req.body);
			//Save it into the DB.
			newSuperhero.save(function(err){
				if(err) res.send(err);
				//If no errors, send it back to the client
				res.json(req.body);
			});
		},
		/*
		 * Get a single superhero based on id.
		 */
		getOne: function(req, res){
			Superhero.findById(req.params.id, function(err, superhero){
				if(err) res.send(err);
				//If no errors, send it back to the client
				res.json(superhero);
			});		
		}
	}
};  