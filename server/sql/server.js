const express = require ('express');
const db = require ('./db/db_index');

const morgan = require('morgan');
const parser = require('body-parser');

const router = require('./routes');

const PORT = process.env.PORT || 8080;

const app = express();


// ============ stuff for authentication ==============//
const passport = require ('passport');
const cookieParser = require('cookie-parser'); //reads cookies
const session = require('express-session');

app.use(cookieParser());
app.use(parser());

// required for passport
app.use(session( {secret: 'heyyyy'})); // session secret?
app.use(passport.initialize()); // ??
app.use(passport.session()); // persistent session login

require('./authRoutes.js')(app, passport);
require('../config/passport.js')(passport);

// set port to listen on
app.set('port', 8080);

//log and parse
app.use(morgan('dev'));
app.use(parser.json());

//set up API routes
app.use('/api', router);

//serve client files

app.use(express.static(__dirname+'/../../client'));

app.listen(PORT, function(){
  console.log('Listening on', PORT);
});
