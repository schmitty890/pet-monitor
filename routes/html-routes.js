// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

var db = require("../models");

module.exports = function (app) {

  // Home Page
  app.get('/', function (req, res) {
    // console.log(req.user);
    let hbsObject = {
      user: req.user
    };
    // console.log(hbsObject);
    if(hbsObject.user) {
      db.pet.findAll({
        where: {
            $or: [{
                username: hbsObject.user.username
            }, {
                associateSelectOne: hbsObject.user.username
            }, {
                associateSelectTwo: hbsObject.user.username
            }, {
                associateSelectThree: hbsObject.user.username
            }]
        }
      }).then(function(thePets) {
        // console.log(thePets);
        hbsObject.thePets = thePets;
        // console.log(hbsObject)
        res.render('index', { hbsObject: hbsObject });
      });
    } else {
      res.render('index');
    }
  });

};

