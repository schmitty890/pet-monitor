const moment = require('moment');
var momentBirthday = function(time) {
  var check = moment(time);
  var month = check.format('M');
  var day   = check.format('D');
  var year  = check.format('YYYY');
  var d = new Date();
  var currentYear = d.getFullYear();
  return moment([currentYear, month - 1, day]).fromNow();
}

module.exports = momentBirthday;
