var db = require('../db/db_index');

module.exports = {

  ////////////////////////
  //     Work Here     //
  ////////////////////////


  prompts: {
    get: function (req, res) {
      //if there's a promptid
      if(req.params.id){

        db.Prompt.find({where:{id: req.params.id}})
        .then(function(prompt) {
          res.send(prompt);
        });

      } else { // if no prompt id

        db.Prompt.findAll()
        .then(function(prompts) {
          res.send(prompts);
        });

      }
    },

    post: function (req, res) {
      const {text, sensitive } = req.body;
      db.Prompt.findOrCreate({where: {text: text}})
      .then(function(prompt) {
        res.status(201).send(prompt);
      });

    }
  },

  allChoices: {
    get: function(req, res){
      db.Choice.findAll()
      .then(choices => res.send(choices));
    }
  }
};
