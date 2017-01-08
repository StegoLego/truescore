module.exports = function (app, passport){


console.log("hello from inside auth routes");

app.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email' ] }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/#game',
    failureRedirect: '/#login'
  }));


  app.get('/logout', function (req, res){
    req.logout();
    res.redirect('/#');
  });

//check if logged in
  function isLoggedIn (req, res, next){
  // if user is authenticated, sounds good and move to next step
  if ( req.isAuthenticated() ) {
    return next();
  }
  // if not, then redirect to homepage

  res.redirect('/');
  }

};
