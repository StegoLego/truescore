var callbackAddress = process.env.HOST || 'http://localhost:8080/auth/facebook/callback';

module.exports = {

   'facebookAuth': {
       'clientID': '2011827875710806',
       'clientSecret': '03bde30d95fcd14719a125aa1a3a2ce6',
       'callbackURL': callbackAddress
   }
};
