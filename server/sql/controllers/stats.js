var db = require('../db/db_index');

module.exports = {
  winsAndLosses: function(choiceId, promptId){

    let wins, losses;

    db.Comparison.count({where: {
        winnerId: choiceId,
        promptId
      }})
      .then( wins => wins = wins );

      db.Comparison.count({where: {
        loserId: choiceId,
        promptId
      }})
      .then( wins => {
        losses = losses;
        return {wins, losses};
      });

  },
  statsByPrompt: function(req, res){
    const { promptId } = req.params;

    db.Choice.findAll()
    .then(people => {

      const numPeople = people.length;

      people.forEach((person, idx) => {

        db.Comparison.count({where: {
          winnerId: person.id,
          promptId
        }})
        .then((wins)=> {
          person.dataValues.wins = wins;
        });

        db.Comparison.count({where: {
          loserId: person.id,
          promptId
        }})
        .then((losses)=> {
          person.dataValues.losses = losses;

          if(idx === numPeople - 1){
            res.send(people);
          }
        });
      
      })

    });
    
  }
};