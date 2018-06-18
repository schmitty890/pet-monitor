const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv').config();
const passport = require('passport');
const session = require('express-session');
const moment = require('moment');

const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');
const seeds = require('./db/seeds.js');

const ifeq = require('./views/helpers/ifequal');
const momentBirthday = require('./views/helpers/momentBirthday');
const momentFromNowTime = require('./views/helpers/momentFromNowTime');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// Static directory
app.use(express.static('public'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    ifeq: ifeq,
    momentBirthday: momentBirthday,
    momentFromNowTime: momentFromNowTime
  }
}));
app.set('view engine', 'handlebars');

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize()); //initializes passport
app.use(passport.session()); // creates persistent login sessions

// Routes
// =============================================================
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);
require('./routes/auth-routes.js')(app, passport);

// Load Passport Strategies
// =============================================================
require('./config/passport/passport.js')(passport, db.user);

// show 404 page if no route has been hit
app.get('*', function(req, res) {
  res.render('404');
});

// Starting our Express app
// =============================================================

// Always keep one of the "db.sequelize" lines commented out.
db.sequelize.sync().then(function() {
// reset your seeds
// db.sequelize.sync({ force: true }).then(function () {
  // seeds(); // populates with seed data

  app.listen(PORT, function () {
    // console.log("App listening on PORT " + PORT);
    console.log('App development is using brower-sync, proxied on http://localhost:3000');
  });
});
