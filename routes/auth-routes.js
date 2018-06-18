const authController = require('../controller/authcontroller');
const passport   = require('passport')

module.exports = function(app) {
  app.get('/signup', authController.signup);
  app.get('/signin', authController.signin);
  //applys strategy to signup route
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup'
  }));
  app.post('/signin', passport.authenticate('local-signin',  {
    successRedirect: '/profile',
    failureRedirect: '/signin'
  }));
  app.get('/profile',isLoggedIn, authController.account);
  app.get('/postclassified', isLoggedIn, authController.postclassified);
  app.get('/profile/postapet', isLoggedIn, authController.postapet);
  app.get('/profile/yourpets', isLoggedIn, authController.yourpetslanding);
  app.get('/profile/pets', isLoggedIn, authController.pets);

  app.post('/postclassified', passport.authenticate('local-signin', {
    successRedirect: '/classifieds',
    failureRedirect: '/profile'
  }));

  app.get('/new-resource', isLoggedIn, authController.postresource);
  app.post('/api/resource', passport.authenticate('local-signin', {
    successRedirect: '/resources',
    failureRedirect: '/signup'
  }));

  app.get('/contact', isLoggedIn, authController.contact);
  app.get('/logout',authController.logout);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/signin');
  }
}
