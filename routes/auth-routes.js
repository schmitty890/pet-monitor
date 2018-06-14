const authController = require('../controller/authcontroller');
const passport   = require('passport')

module.exports = function(app) {
  app.get('/signup', authController.signup);
  app.get('/signin', authController.signin);
  //applys strategy to signup route
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/account',
    failureRedirect: '/signup'
  }));
  app.post('/signin', passport.authenticate('local-signin',  {
    successRedirect: '/account',
    failureRedirect: '/signin'
  }));
  app.get('/account',isLoggedIn, authController.account);
  app.get('/postcommunity', isLoggedIn, authController.postcommunity);
  app.get('/postclassified', isLoggedIn, authController.postclassified);
  app.get('/postevent', isLoggedIn, authController.postevent);
  app.get('/postresource', isLoggedIn, authController.postevent);

  app.post('/postclassified', passport.authenticate('local-signin', {
    successRedirect: '/classifieds',
    failureRedirect: '/account'
  }))

  app.get('/new-resource', isLoggedIn, authController.postresource);
  app.post('/api/resource', passport.authenticate('local-signin', {
    successRedirect: '/resources',
    failureRedirect: '/signup'
  }))

  app.get('/contact', isLoggedIn, authController.contact);
  app.get('/logout',authController.logout);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/signin');
  }
}
