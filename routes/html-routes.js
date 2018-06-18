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

    res.render('index', { hbsObject: hbsObject });
  });

};

