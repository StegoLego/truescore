module.exports = function (app, passport){

  app.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email' ] }));

  app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/#home',
    failureRedirect: '/#login'
  }));

  app.get('/logout', function (req, res){
    req.logout();
    res.redirect('/#');
  });

// this is for setting state
  app.get('/api/currentUserData', function (req, res){
    res.send(req.user);
  });

};
