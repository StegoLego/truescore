// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


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
        return next();
      }
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

router.post('/comparison',comparison.post );

router.get('/comparison/:id', comparison.get );

router.get('/allcomparisons', comparison.getAll );



/////////////////////////
//     Dev/Testing     //
/////////////////////////

// to drop all tables, and re-initate them (DEPRECATED)

// router.get('/dangerwipedatabase', setup.dangerwipedatabase.get);

// router.get('/seed/winloss', setup.seedwinloss.get);

router.get('/testroute', setup.testroute.get);



module.exports = router;
