module.exports = function(Handlebars) {

var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["JST"] = this["JST"] || {};

this["JST"]["app/templates/header.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul>\n  <li>\n    Docs:\n    <a class=\"header-link\" href=\"https://github.com/brunch/brunch/tree/stable/docs\">Brunch</a> /\n    <a class=\"header-link\" href=\"http://docs.chaplinjs.org\">Chaplin</a>\n  </li>\n  <li>\n    GitHub issues:\n    <a class=\"header-link\" href=\"https://github.com/brunch/brunch/issues\">Brunch</a> /\n    <a class=\"header-link\" href=\"https://github.com/chaplinjs/chaplin/issues\">Chaplin</a>\n  </li>\n  <li><a class=\"header-link\" href=\"https://github.com/paulmillr/ostio\">Ost.io example app</a></li>\n</ul>\n";
  });

if (typeof exports === 'object' && exports) {module.exports = this["JST"];}

return this["JST"];

};