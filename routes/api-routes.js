
var db = require("../models");
var axios = require('axios');

module.exports = function(app) {
  app.post('/api/pets', function(req, res) {
    var userId = '';
    db.pet.create(req.body)
      .then(function(pet) {
        // console.log(pet, 'made it here')
        res.json(pet);
      })
      .catch(function(err) {
        res.json({ status: "ERROR", message: err })
      })
  });

  app.put('/api/pets/:id', function(req, res) {
    console.log(req.body);
    var updateAction = req.body.action;
    var update = {};
    // build where clause
    switch(updateAction) {
      case 'lastTreat':
        update = {
          lastTreat: req.body.time
        }
        break;
      case 'lastFed':
        update = {
          lastFed: req.body.time
        }
        break;
      case 'lastOutside':
        update = {
          lastOutside: req.body.time
        }
        break;
      case 'lastBath':
        update = {
          lastBath: req.body.time
        }
        break;
      case 'lastGrooming':
        update = {
          lastGrooming: req.body.time
        }
        break;
      case 'lastLitterScoop':
        update = {
          lastLitterScoop: req.body.time
        }
        break;
      case 'lastNailClip':
        update = {
          lastNailClip: req.body.time
        }
        break;
      case 'lastMedicine':
        update = {
          lastMedicine: req.body.time
        }
        break;
      case 'lastBrushing':
        update = {
          lastBrushing: req.body.time
        }
        break;
      case 'associateSelectOne':
        update = {
          associateSelectOne: req.body.granteeUserName
        }
        break;
      case 'associateSelectTwo':
        update = {
          associateSelectTwo: req.body.granteeUserName
        }
        break;
      case 'associateSelectThree':
        update = {
          associateSelectThree: req.body.granteeUserName
        }
        break;
    }
    update.lastInteractedWith = req.body.user;

    db.pet.update(update, {
      where: {
        id: req.body.petID
      }
    }).then(function() {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      })
      .catch(function(err) {
        res.json({status: "ERROR", message: err})
      });
  });

  app.post("/api/messages", function(req, res) {
    var userId = '';
    // console.log(req.body)
    db.message.create(req.body)
      .then(function(message) {
        // console.log(message, "made it here")
        res.json(message);
        // console.log("made it here")
      })
      .catch(function(err) {
        res.json({ status: "ERROR", message: err })
      })
  });


  app.post("/api/resources", function(req, res) {
    var userId = '';
    // console.log(req.body);

    db.resource.create(req.body)
      .then(function(resources) {
        res.json(resources);
      })
      .catch(function(err) {
        res.json({ status: "ERROR", message: err })
      })
  });

  app.get('/api/weather', function(req, res) {
    var openWeatherCreds = {
      apiKey: process.env.openWeatherMap,
      zipcode: 27606,
      city: 'Raleigh'
    }
    var queryURLweather = 'https://api.openweathermap.org/data/2.5/weather?zip=' + openWeatherCreds.zipcode + '&q=' + openWeatherCreds.city + '&units=imperial&appid=' + openWeatherCreds.apiKey;

    axios.get(queryURLweather)
      .then(function (resp) {
        res.send(resp.data);
      })
      .catch(function (error) {
        // console.log(error);
      });

  });

  app.get("/api/events", function(req, res) {
    db.event.findAll({
      order: [
        ['date', 'ASC']
      ]
    }).then( function(eventData) {
      res.json(eventData);
    })
  })

  app.put("/api/users/:id", function(req, res) {
    var updateLine;
    var pingID = req.params.id;
    if (req.body.name) {
      updateLine = req.body.name;
      db.user.update({
        username: updateLine
      }, {
        where: {
          id: pingID
        }
      }).then(function() {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      })
      .catch(function(err) {
        res.json({status: "ERROR", message: err})
      })
    }
    if (req.body.email) {
      updateLine = req.body.email;
      db.user.update({
        email: updateLine
      }, {
        where: {
          id: pingID
        }
      }).then(function() {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      })
      .catch(function(err) {
        res.json({status: "ERROR", message: err})
      })
    }
    if (req.body.about) {
      updateLine = req.body.about;
      db.user.update({
        about: updateLine
      }, {
        where: {
          id: pingID
        }
      }).then(function() {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      })
      .catch(function(err) {
        res.json({status: "ERROR", message: err})
      })
    }
  })
};

