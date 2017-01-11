
var FacebookStrategy = require('passport-facebook').Strategy;
var db = require ('../sql/db/db_index.js');

// load auth variablers for facebook
var configAuth = require ('./keys');

module.exports = function (passport){

 //serialize User
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

//deserialize User
  passport.deserializeUser(function(id, done) {
    db.User.find({
      where: {
        id: id
      }
    }).then(function(user) {
      if (!user) return done(new Error('Invalid user'));
      return done(null, user); 
    });
  });

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(token, tokenSecret, profile, done) {
      db.User.findOrCreate({
        where: {
          fbId: profile.id // sets user facebook id
          // token: token, // save token that facebooks sends us
          // name: profile.displayName, // name of user set to facbook name
          // minifbPhoto: profile.photos[0].value,// sets user facebook id
          // bigfbPhoto: `http://graph.facebook.com/${profile.id}/picture?type:large`,
          // email: profile.emails[0].value// sets user facebook id
        }
      }).spread(function(user) {
        return done(null, user);
      });
    }));

};
