module.exports = function(Handlebars) {

var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["JST"] = this["JST"] || {};

this["JST"]["app/templates/site.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"header-container\" id=\"header-container\"></div>\n\n<div class=\"outer-page-container\">\n  <div class=\"page-container\" id=\"page-container\">\n  </div>\n</div>\n";
  });

if (typeof exports === 'object' && exports) {module.exports = this["JST"];}

return this["JST"];

};