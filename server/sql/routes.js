const router = require('express').Router();
const controller = require('./controllers/controllers');
const setup = require('./controllers/setup');
const comparison = require('./controllers/comparison');
const stats = require('./controllers/stats');
var colors = require('colors');


var FacebookStrategy = require('passport-facebook').Strategy;
const passport = require ('passport');
const auth = require('./authRoutes.js');


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.user) {
      console.log("User exists which is pretty sweet".rainbow);
        return next();
      }

    console.log("User shoudl be getting kicked out!!!!!".rainbow);
    // if they aren't redirect them to the home page
    // res.sendfile('./dist/index.html');
    res.redirect('/#/login');
}

/////////////////////
//     Prompts     //
/////////////////////

//get data for all prompts
router.get('/prompts', controller.prompts.get);

//get data for single prompt
router.get('/prompts/:id', controller.prompts.get);

// create new prompt
router.post('/prompts', controller.prompts.post);



/////////////////////
//     Choices     //
/////////////////////

// return all choices in DB
router.get('/allChoices', controller.allChoices.get);



/////////////////////////
//        Stats        //
/////////////////////////

router.get('/stats/prompt/:promptId', stats.statsByPrompt);



/////////////////////////
//     Comparisons     //
/////////////////////////

router.post('/comparison',comparison.post);

router.get('/comparison/:id', comparison.get);

router.get('/comparison/all', comparison.getAll);



/////////////////////////
//     Dev/Testing     //
/////////////////////////

// to drop all tables, and re-initate them
router.get('/dangerwipedatabase', setup.dangerwipedatabase.get);

router.get('/seed/winloss', setup.seedwinloss.get);

router.get('/testroute', setup.testroute.get);



module.exports = router;
