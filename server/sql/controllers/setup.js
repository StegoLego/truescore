const db = require('../db/db_index');
const animals = require('../../../docs/db_stubs/animals');
const seedDatabase = require('./seedDatabase');
const stats = require('./stats');
const seedWinLoss = require('../../../docs/tests/winloss');


module.exports = {
  dangerwipedatabase: {

    get: function(req, res){
      db.database.dropAllSchemas()
      .then(result => {
        db.User.sync();
        db.Choice.sync();
        db.Prompt.sync();
        db.Comparison.sync();
        seedDatabase();
        res.send("All evidence has been destroyed, you have a fresh start.");
      });
    }
  },

  seedwinloss: {

    get: function(req, res){
      seedWinLoss();
      res.send('comparisons seeded');
    }
  },

  testroute: {
    get: function(req, res){
      
      res.send('testing route!');

    }
  
  }

};