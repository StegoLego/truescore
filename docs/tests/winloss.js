const axios = require('axios');

const ROOT_URL = 'http://localhost:8080/';


var results = [
  {
    "promptid":  1,
    "winner": 1,
    "loser": 2
  },
  {
    "promptid":  1,
    "winner": 1,
    "loser": 3
  },
  {
    "promptid":  1,
    "winner": 1,
    "loser": 3
  },
  {
    "promptid":  1,
    "winner": 2,
    "loser": 1
  },
  {
    "promptid":  1,
    "winner": 2,
    "loser": 3
  },
  {
    "promptid":  1,
    "winner": 3,
    "loser": 2
  }
];

function test (){
  results.forEach(result=>{
    axios.post(`${ROOT_URL}api/comparison`, result);
  });
}

module.exports = test;



