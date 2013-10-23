(function() {
  var utils;

  utils = Chaplin.utils.beget(Chaplin.utils);

  if (typeof Object.seal === "function") {
    Object.seal(utils);
  }

  module.exports = utils;

}).call(this);
