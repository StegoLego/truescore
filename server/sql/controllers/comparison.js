var db = require('../db/db_index');

module.exports = {
  get: function(req, res){

    console.log("request hopefully has user on it", req);
    const promptId = req.params.id || 1;
    //how many choices in db?
    db.Choice.count().
    then(count => {

    //get 2 random, but different ids
    const choice1Id = randomId(count);
    let choice2Id = randomId(count);

    while (choice1Id === choice2Id ){
      choice2Id = randomId(count);
    }

    // get choices data from db
    db.Choice.findAll( {where: {id: [choice1Id, choice2Id] } } )
    .then(([choiceA, choiceB]) => {

      db.Comparison.count({where: {
        winnerId: choiceA.id,
        promptId
      }})
      .then((wins)=> {
        choiceA.dataValues.wins = wins; //set Choice A wins
      });

      db.Comparison.count({where: {
        loserId: choiceA.id,
        promptId
      }})
      .then((losses)=> {
        choiceA.dataValues.losses = losses; //set Choice A losses
      });

      db.Comparison.count({where: {
        winnerId: choiceB.id,
        promptId
      }})
      .then((wins)=> {
        choiceB.dataValues.wins = wins; //set Choice B wins
      });

      db.Comparison.count({where: {
        loserId: choiceB.id,
        promptId
      }})
      .then((losses)=> {
        choiceB.dataValues.losses = losses; //set Choice B losses
        res.send([choiceA, choiceB]);
      });
    });


    });
  },
  getAll: function(req, res){
    db.Comparison.findAll()
    .then(comparisons => res.send(comparisons));
  },
  post: function(req, res){
    console.log("____req.body: ", req.body);
    const {userId, promptId, winnerId, loserId} = req.body;
    db.Comparison.create({
      userId: userId,
      promptId: promptId,
      winnerId: winnerId,
      loserId: loserId
    })
    .then((thing) => res.sendStatus(201))
  }
}


function randomId (itemsInSet){
  return Math.ceil( Math.random() * itemsInSet );
}
