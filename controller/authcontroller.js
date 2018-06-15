var exports = module.exports = {}
//not using this yet
var db = require("../models");

exports.signup = function(req,res){
  res.render('signup');
}

exports.signin = function(req,res){
  res.render('signin');
}

//example of how we can grab data coming through the route before rendering.
//when in doubt about carrying data into a new route, console.log your req here.
//hit me up if you run into confusion obviously -Joe
exports.account = function(req, res) {
  let hbsObject = {
    user: req.user
  }
  res.render('account', {
    userId: req.user.id,
    userName: req.user.username,
    hbsObject: hbsObject
  });
}

exports.postapet = function(req, res) {
  let hbsObject = {
    user: req.user
  }
  res.render('postapet', {
    userId: req.user.id,
    userName: req.user.username,
    hbsObject: hbsObject
  });
}

exports.yourpetslanding = function(req, res) {
  let hbsObject = {
    user: req.user,
    userId: req.user.id,
    userName: req.user.username
  };
  db.pet.findAll({
    where: {
      username: hbsObject.user.username
    }
  }).then(function(thePets) {
    // console.log(thePets);
    hbsObject.thePets = thePets;
    // console.log(hbsObject)
    res.render('yourpetslanding', { hbsObject: hbsObject });
  });
}

exports.postclassified = function(req, res) {
  let hbsObject = {
    user: req.user
  }
  res.render('postclassified', {
    userId: req.user.id,
    userName: req.user.username,
    hbsObject: hbsObject
  });
}

exports.postresource = function(req, res) {
  let hbsObject = {
    user: req.user
  }
  res.render('postresource', {
    userId: req.user.id,
    userName: req.user.username,
    hbsObject: hbsObject
  });
}

exports.contact = function(req, res) {
  let hbsObject = {
    user: req.user
  }
  res.render('contact', {
    userId: req.user.id,
    userName: req.user.username,
    hbsObject: hbsObject
  });
}


// logout route from header lands here and destroys the express session then redirects to home.
exports.logout = function(req,res){
  req.session.destroy(function() {
    res.redirect('/');
  });
}
