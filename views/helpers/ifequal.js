var ifeq = function (a, b, options) {
  if (a == b) { return options.fn(this); }
}

module.exports = ifeq;