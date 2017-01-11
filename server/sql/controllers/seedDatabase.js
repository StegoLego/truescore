const db = require('../db/db_index');
const animals = require('../../../docs/db_stubs/animals');
const prompts = require('../../../docs/db_stubs/prompts');

const people = require('../../../docs/db_stubs/people');

//One function to call them all
const seedDB = function(){
  //seedAnimals();
  seedPeople();
  seedPrompts();
};

//////////////////////////
//   Individual seeds   //
//////////////////////////

const seedAnimals = function(){
  animals.forEach( ({name, imageUrl}) =>
    db.Choice.create({name, imageUrl})
  );
};

const seedPrompts = function(){
  prompts.forEach( ({text, sensitive, tileImage}) =>
    db.Prompt.create({text, sensitive, tileImage})
  );
};


const seedPeople = function(){
  people.forEach( ({name, imageUrl}) =>
    db.Choice.create({name, imageUrl})
  );
};








module.exports = seedDB;
