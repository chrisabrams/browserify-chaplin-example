(function() {
  var Application, routes;

  Application = require('./application');

  routes = require('./routes');

  $(function() {
    console.log("dom loaded");
    return new Application({
      title: 'Brunch example application',
      controllerSuffix: '-controller',
      routes: routes
    });
  });

}).call(this);
