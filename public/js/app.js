;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  var Application, Chaplin, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Chaplin = require('chaplin');

  module.exports = Application = (function(_super) {
    __extends(Application, _super);

    function Application() {
      _ref = Application.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return Application;

  })(Chaplin.Application);

}).call(this);

},{"chaplin":false}],2:[function(require,module,exports){
(function() {
  var Controller, SiteView, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SiteView = require('../../views/site-view');

  module.exports = Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      _ref = Controller.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Controller.prototype.beforeAction = function() {
      return this.compose('site', SiteView);
    };

    return Controller;

  })(Chaplin.Controller);

}).call(this);

},{"../../views/site-view":18}],3:[function(require,module,exports){
(function() {
  var Controller, HeaderView, HomeController, HomePageView, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Controller = require('./base/controller');

  HeaderView = require('../views/home/header-view');

  HomePageView = require('../views/home/home-page-view');

  module.exports = HomeController = (function(_super) {
    __extends(HomeController, _super);

    function HomeController() {
      _ref = HomeController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HomeController.prototype.beforeAction = function() {
      HomeController.__super__.beforeAction.apply(this, arguments);
      return this.compose('header', HeaderView, {
        region: 'header'
      });
    };

    HomeController.prototype.index = function() {
      return this.view = new HomePageView({
        region: 'main'
      });
    };

    return HomeController;

  })(Controller);

}).call(this);

},{"../views/home/header-view":16,"../views/home/home-page-view":17,"./base/controller":2}],4:[function(require,module,exports){
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

},{"./application":1,"./routes":10}],5:[function(require,module,exports){
(function() {
  var utils;

  utils = Chaplin.utils.beget(Chaplin.utils);

  if (typeof Object.seal === "function") {
    Object.seal(utils);
  }

  module.exports = utils;

}).call(this);

},{}],6:[function(require,module,exports){
(function() {
  var register,
    __slice = [].slice;

  register = function(name, fn) {
    return Handlebars.registerHelper(name, fn);
  };

  register('with', function(context, options) {
    if (!context || Handlebars.Utils.isEmpty(context)) {
      return options.inverse(this);
    } else {
      return options.fn(context);
    }
  });

  register('without', function(context, options) {
    var inverse;
    inverse = options.inverse;
    options.inverse = options.fn;
    options.fn = inverse;
    return Handlebars.helpers["with"].call(this, context, options);
  });

  register('url', function() {
    var options, params, routeName, _i;
    routeName = arguments[0], params = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), options = arguments[_i++];
    return Chaplin.helpers.reverse(routeName, params);
  });

}).call(this);

},{}],7:[function(require,module,exports){
(function() {
  var mediator;

  mediator = module.exports = Chaplin.mediator;

}).call(this);

},{}],8:[function(require,module,exports){
(function() {
  var Collection, Model, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Model = require('./model');

  module.exports = Collection = (function(_super) {
    __extends(Collection, _super);

    function Collection() {
      _ref = Collection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Collection.prototype.model = Model;

    return Collection;

  })(Chaplin.Collection);

}).call(this);

},{"./model":9}],9:[function(require,module,exports){
(function() {
  var Model, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = Model = (function(_super) {
    __extends(Model, _super);

    function Model() {
      _ref = Model.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return Model;

  })(Chaplin.Model);

}).call(this);

},{}],10:[function(require,module,exports){
(function() {
  module.exports = function(match) {
    return match('', 'home#index');
  };

}).call(this);

},{}],11:[function(require,module,exports){
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul>\n  <li>\n    Docs:\n    <a class=\"header-link\" href=\"https://github.com/brunch/brunch/tree/stable/docs\">Brunch</a> /\n    <a class=\"header-link\" href=\"http://docs.chaplinjs.org\">Chaplin</a>\n  </li>\n  <li>\n    GitHub issues:\n    <a class=\"header-link\" href=\"https://github.com/brunch/brunch/issues\">Brunch</a> /\n    <a class=\"header-link\" href=\"https://github.com/chaplinjs/chaplin/issues\">Chaplin</a>\n  </li>\n  <li><a class=\"header-link\" href=\"https://github.com/paulmillr/ostio\">Ost.io example app</a></li>\n</ul>\n";
  })
;

},{}],12:[function(require,module,exports){
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a href=\"http://brunch.io/\">\n  <img src=\"http://brunch.io/images/brunch.png\" alt=\"Brunch\" />\n</a>\n";
  })
;

},{}],13:[function(require,module,exports){
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"header-container\" id=\"header-container\"></div>\n\n<div class=\"outer-page-container\">\n  <div class=\"page-container\" id=\"page-container\">\n  </div>\n</div>\n";
  })
;

},{}],14:[function(require,module,exports){
(function() {
  var CollectionView, View, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('./view');

  module.exports = CollectionView = (function(_super) {
    __extends(CollectionView, _super);

    function CollectionView() {
      _ref = CollectionView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CollectionView.prototype.getTemplateFunction = View.prototype.getTemplateFunction;

    return CollectionView;

  })(Chaplin.CollectionView);

}).call(this);

},{"./view":15}],15:[function(require,module,exports){
(function() {
  var View, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require('../../lib/view-helper');

  module.exports = View = (function(_super) {
    __extends(View, _super);

    function View() {
      _ref = View.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    View.prototype.getTemplateFunction = function() {
      return this.template;
    };

    return View;

  })(Chaplin.View);

}).call(this);

},{"../../lib/view-helper":6}],16:[function(require,module,exports){
(function() {
  var HeaderView, View, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('../base/view');

  module.exports = HeaderView = (function(_super) {
    __extends(HeaderView, _super);

    function HeaderView() {
      _ref = HeaderView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HeaderView.prototype.autoRender = true;

    HeaderView.prototype.className = 'header';

    HeaderView.prototype.tagName = 'header';

    HeaderView.prototype.template = require('../../templates/header');

    return HeaderView;

  })(View);

}).call(this);

},{"../../templates/header":11,"../base/view":15}],17:[function(require,module,exports){
(function() {
  var HomePageView, View, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('../base/view');

  module.exports = HomePageView = (function(_super) {
    __extends(HomePageView, _super);

    function HomePageView() {
      _ref = HomePageView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HomePageView.prototype.autoRender = true;

    HomePageView.prototype.className = 'home-page';

    HomePageView.prototype.template = require('../../templates/home');

    return HomePageView;

  })(View);

}).call(this);

},{"../../templates/home":12,"../base/view":15}],18:[function(require,module,exports){
(function() {
  var SiteView, View, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('./base/view');

  module.exports = SiteView = (function(_super) {
    __extends(SiteView, _super);

    function SiteView() {
      _ref = SiteView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SiteView.prototype.container = 'body';

    SiteView.prototype.id = 'site-container';

    SiteView.prototype.regions = {
      header: '#header-container',
      main: '#page-container'
    };

    SiteView.prototype.template = require('../templates/site');

    return SiteView;

  })(View);

}).call(this);

},{"../templates/site":13,"./base/view":15}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY2FicmFtcy9Qcm9qZWN0cy9icm93c2VyaWZ5LWNoYXBsaW4tZXhhbXBsZS90bXAvYXBwbGljYXRpb24uanMiLCIvVXNlcnMvY2FicmFtcy9Qcm9qZWN0cy9icm93c2VyaWZ5LWNoYXBsaW4tZXhhbXBsZS90bXAvY29udHJvbGxlcnMvYmFzZS9jb250cm9sbGVyLmpzIiwiL1VzZXJzL2NhYnJhbXMvUHJvamVjdHMvYnJvd3NlcmlmeS1jaGFwbGluLWV4YW1wbGUvdG1wL2NvbnRyb2xsZXJzL2hvbWUtY29udHJvbGxlci5qcyIsIi9Vc2Vycy9jYWJyYW1zL1Byb2plY3RzL2Jyb3dzZXJpZnktY2hhcGxpbi1leGFtcGxlL3RtcC9pbml0aWFsaXplLmpzIiwiL1VzZXJzL2NhYnJhbXMvUHJvamVjdHMvYnJvd3NlcmlmeS1jaGFwbGluLWV4YW1wbGUvdG1wL2xpYi91dGlscy5qcyIsIi9Vc2Vycy9jYWJyYW1zL1Byb2plY3RzL2Jyb3dzZXJpZnktY2hhcGxpbi1leGFtcGxlL3RtcC9saWIvdmlldy1oZWxwZXIuanMiLCIvVXNlcnMvY2FicmFtcy9Qcm9qZWN0cy9icm93c2VyaWZ5LWNoYXBsaW4tZXhhbXBsZS90bXAvbWVkaWF0b3IuanMiLCIvVXNlcnMvY2FicmFtcy9Qcm9qZWN0cy9icm93c2VyaWZ5LWNoYXBsaW4tZXhhbXBsZS90bXAvbW9kZWxzL2Jhc2UvY29sbGVjdGlvbi5qcyIsIi9Vc2Vycy9jYWJyYW1zL1Byb2plY3RzL2Jyb3dzZXJpZnktY2hhcGxpbi1leGFtcGxlL3RtcC9tb2RlbHMvYmFzZS9tb2RlbC5qcyIsIi9Vc2Vycy9jYWJyYW1zL1Byb2plY3RzL2Jyb3dzZXJpZnktY2hhcGxpbi1leGFtcGxlL3RtcC9yb3V0ZXMuanMiLCIvVXNlcnMvY2FicmFtcy9Qcm9qZWN0cy9icm93c2VyaWZ5LWNoYXBsaW4tZXhhbXBsZS90bXAvdGVtcGxhdGVzL2hlYWRlci5qcyIsIi9Vc2Vycy9jYWJyYW1zL1Byb2plY3RzL2Jyb3dzZXJpZnktY2hhcGxpbi1leGFtcGxlL3RtcC90ZW1wbGF0ZXMvaG9tZS5qcyIsIi9Vc2Vycy9jYWJyYW1zL1Byb2plY3RzL2Jyb3dzZXJpZnktY2hhcGxpbi1leGFtcGxlL3RtcC90ZW1wbGF0ZXMvc2l0ZS5qcyIsIi9Vc2Vycy9jYWJyYW1zL1Byb2plY3RzL2Jyb3dzZXJpZnktY2hhcGxpbi1leGFtcGxlL3RtcC92aWV3cy9iYXNlL2NvbGxlY3Rpb24tdmlldy5qcyIsIi9Vc2Vycy9jYWJyYW1zL1Byb2plY3RzL2Jyb3dzZXJpZnktY2hhcGxpbi1leGFtcGxlL3RtcC92aWV3cy9iYXNlL3ZpZXcuanMiLCIvVXNlcnMvY2FicmFtcy9Qcm9qZWN0cy9icm93c2VyaWZ5LWNoYXBsaW4tZXhhbXBsZS90bXAvdmlld3MvaG9tZS9oZWFkZXItdmlldy5qcyIsIi9Vc2Vycy9jYWJyYW1zL1Byb2plY3RzL2Jyb3dzZXJpZnktY2hhcGxpbi1leGFtcGxlL3RtcC92aWV3cy9ob21lL2hvbWUtcGFnZS12aWV3LmpzIiwiL1VzZXJzL2NhYnJhbXMvUHJvamVjdHMvYnJvd3NlcmlmeS1jaGFwbGluLWV4YW1wbGUvdG1wL3ZpZXdzL3NpdGUtdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgdmFyIEFwcGxpY2F0aW9uLCBDaGFwbGluLCBfcmVmLFxuICAgIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICAgIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG4gIENoYXBsaW4gPSByZXF1aXJlKCdjaGFwbGluJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBBcHBsaWNhdGlvbiA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXBwbGljYXRpb24sIF9zdXBlcik7XG5cbiAgICBmdW5jdGlvbiBBcHBsaWNhdGlvbigpIHtcbiAgICAgIF9yZWYgPSBBcHBsaWNhdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfcmVmO1xuICAgIH1cblxuICAgIHJldHVybiBBcHBsaWNhdGlvbjtcblxuICB9KShDaGFwbGluLkFwcGxpY2F0aW9uKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIENvbnRyb2xsZXIsIFNpdGVWaWV3LCBfcmVmLFxuICAgIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICAgIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG4gIFNpdGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vdmlld3Mvc2l0ZS12aWV3Jyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBDb250cm9sbGVyID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb250cm9sbGVyLCBfc3VwZXIpO1xuXG4gICAgZnVuY3Rpb24gQ29udHJvbGxlcigpIHtcbiAgICAgIF9yZWYgPSBDb250cm9sbGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIF9yZWY7XG4gICAgfVxuXG4gICAgQ29udHJvbGxlci5wcm90b3R5cGUuYmVmb3JlQWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wb3NlKCdzaXRlJywgU2l0ZVZpZXcpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29udHJvbGxlcjtcblxuICB9KShDaGFwbGluLkNvbnRyb2xsZXIpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgQ29udHJvbGxlciwgSGVhZGVyVmlldywgSG9tZUNvbnRyb2xsZXIsIEhvbWVQYWdlVmlldywgX3JlZixcbiAgICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuICBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9iYXNlL2NvbnRyb2xsZXInKTtcblxuICBIZWFkZXJWaWV3ID0gcmVxdWlyZSgnLi4vdmlld3MvaG9tZS9oZWFkZXItdmlldycpO1xuXG4gIEhvbWVQYWdlVmlldyA9IHJlcXVpcmUoJy4uL3ZpZXdzL2hvbWUvaG9tZS1wYWdlLXZpZXcnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IEhvbWVDb250cm9sbGVyID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIb21lQ29udHJvbGxlciwgX3N1cGVyKTtcblxuICAgIGZ1bmN0aW9uIEhvbWVDb250cm9sbGVyKCkge1xuICAgICAgX3JlZiA9IEhvbWVDb250cm9sbGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIF9yZWY7XG4gICAgfVxuXG4gICAgSG9tZUNvbnRyb2xsZXIucHJvdG90eXBlLmJlZm9yZUFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgSG9tZUNvbnRyb2xsZXIuX19zdXBlcl9fLmJlZm9yZUFjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIHRoaXMuY29tcG9zZSgnaGVhZGVyJywgSGVhZGVyVmlldywge1xuICAgICAgICByZWdpb246ICdoZWFkZXInXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgSG9tZUNvbnRyb2xsZXIucHJvdG90eXBlLmluZGV4ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3ID0gbmV3IEhvbWVQYWdlVmlldyh7XG4gICAgICAgIHJlZ2lvbjogJ21haW4nXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEhvbWVDb250cm9sbGVyO1xuXG4gIH0pKENvbnRyb2xsZXIpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgQXBwbGljYXRpb24sIHJvdXRlcztcblxuICBBcHBsaWNhdGlvbiA9IHJlcXVpcmUoJy4vYXBwbGljYXRpb24nKTtcblxuICByb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcycpO1xuXG4gICQoZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJkb20gbG9hZGVkXCIpO1xuICAgIHJldHVybiBuZXcgQXBwbGljYXRpb24oe1xuICAgICAgdGl0bGU6ICdCcnVuY2ggZXhhbXBsZSBhcHBsaWNhdGlvbicsXG4gICAgICBjb250cm9sbGVyU3VmZml4OiAnLWNvbnRyb2xsZXInLFxuICAgICAgcm91dGVzOiByb3V0ZXNcbiAgICB9KTtcbiAgfSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciB1dGlscztcblxuICB1dGlscyA9IENoYXBsaW4udXRpbHMuYmVnZXQoQ2hhcGxpbi51dGlscyk7XG5cbiAgaWYgKHR5cGVvZiBPYmplY3Quc2VhbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgT2JqZWN0LnNlYWwodXRpbHMpO1xuICB9XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB1dGlscztcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIHJlZ2lzdGVyLFxuICAgIF9fc2xpY2UgPSBbXS5zbGljZTtcblxuICByZWdpc3RlciA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgcmV0dXJuIEhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgZm4pO1xuICB9O1xuXG4gIHJlZ2lzdGVyKCd3aXRoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmICghY29udGV4dCB8fCBIYW5kbGViYXJzLlV0aWxzLmlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKGNvbnRleHQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVnaXN0ZXIoJ3dpdGhvdXQnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIGludmVyc2U7XG4gICAgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZTtcbiAgICBvcHRpb25zLmludmVyc2UgPSBvcHRpb25zLmZuO1xuICAgIG9wdGlvbnMuZm4gPSBpbnZlcnNlO1xuICAgIHJldHVybiBIYW5kbGViYXJzLmhlbHBlcnNbXCJ3aXRoXCJdLmNhbGwodGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG4gIH0pO1xuXG4gIHJlZ2lzdGVyKCd1cmwnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3B0aW9ucywgcGFyYW1zLCByb3V0ZU5hbWUsIF9pO1xuICAgIHJvdXRlTmFtZSA9IGFyZ3VtZW50c1swXSwgcGFyYW1zID0gMyA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgX2kgPSBhcmd1bWVudHMubGVuZ3RoIC0gMSkgOiAoX2kgPSAxLCBbXSksIG9wdGlvbnMgPSBhcmd1bWVudHNbX2krK107XG4gICAgcmV0dXJuIENoYXBsaW4uaGVscGVycy5yZXZlcnNlKHJvdXRlTmFtZSwgcGFyYW1zKTtcbiAgfSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBtZWRpYXRvcjtcblxuICBtZWRpYXRvciA9IG1vZHVsZS5leHBvcnRzID0gQ2hhcGxpbi5tZWRpYXRvcjtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIENvbGxlY3Rpb24sIE1vZGVsLCBfcmVmLFxuICAgIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICAgIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG4gIE1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gQ29sbGVjdGlvbiA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29sbGVjdGlvbiwgX3N1cGVyKTtcblxuICAgIGZ1bmN0aW9uIENvbGxlY3Rpb24oKSB7XG4gICAgICBfcmVmID0gQ29sbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfcmVmO1xuICAgIH1cblxuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLm1vZGVsID0gTW9kZWw7XG5cbiAgICByZXR1cm4gQ29sbGVjdGlvbjtcblxuICB9KShDaGFwbGluLkNvbGxlY3Rpb24pO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgTW9kZWwsIF9yZWYsXG4gICAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBNb2RlbCA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTW9kZWwsIF9zdXBlcik7XG5cbiAgICBmdW5jdGlvbiBNb2RlbCgpIHtcbiAgICAgIF9yZWYgPSBNb2RlbC5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfcmVmO1xuICAgIH1cblxuICAgIHJldHVybiBNb2RlbDtcblxuICB9KShDaGFwbGluLk1vZGVsKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtYXRjaCkge1xuICAgIHJldHVybiBtYXRjaCgnJywgJ2hvbWUjaW5kZXgnKTtcbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgXG5cblxuICByZXR1cm4gXCI8dWw+XFxuICA8bGk+XFxuICAgIERvY3M6XFxuICAgIDxhIGNsYXNzPVxcXCJoZWFkZXItbGlua1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2JydW5jaC9icnVuY2gvdHJlZS9zdGFibGUvZG9jc1xcXCI+QnJ1bmNoPC9hPiAvXFxuICAgIDxhIGNsYXNzPVxcXCJoZWFkZXItbGlua1xcXCIgaHJlZj1cXFwiaHR0cDovL2RvY3MuY2hhcGxpbmpzLm9yZ1xcXCI+Q2hhcGxpbjwvYT5cXG4gIDwvbGk+XFxuICA8bGk+XFxuICAgIEdpdEh1YiBpc3N1ZXM6XFxuICAgIDxhIGNsYXNzPVxcXCJoZWFkZXItbGlua1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2JydW5jaC9icnVuY2gvaXNzdWVzXFxcIj5CcnVuY2g8L2E+IC9cXG4gICAgPGEgY2xhc3M9XFxcImhlYWRlci1saW5rXFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vY2hhcGxpbmpzL2NoYXBsaW4vaXNzdWVzXFxcIj5DaGFwbGluPC9hPlxcbiAgPC9saT5cXG4gIDxsaT48YSBjbGFzcz1cXFwiaGVhZGVyLWxpbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsbWlsbHIvb3N0aW9cXFwiPk9zdC5pbyBleGFtcGxlIGFwcDwvYT48L2xpPlxcbjwvdWw+XFxuXCI7XG4gIH0pXG47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IEhhbmRsZWJhcnMudGVtcGxhdGUoZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIFxuXG5cbiAgcmV0dXJuIFwiPGEgaHJlZj1cXFwiaHR0cDovL2JydW5jaC5pby9cXFwiPlxcbiAgPGltZyBzcmM9XFxcImh0dHA6Ly9icnVuY2guaW8vaW1hZ2VzL2JydW5jaC5wbmdcXFwiIGFsdD1cXFwiQnJ1bmNoXFxcIiAvPlxcbjwvYT5cXG5cIjtcbiAgfSlcbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgXG5cblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGFpbmVyXFxcIiBpZD1cXFwiaGVhZGVyLWNvbnRhaW5lclxcXCI+PC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwib3V0ZXItcGFnZS1jb250YWluZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicGFnZS1jb250YWluZXJcXFwiIGlkPVxcXCJwYWdlLWNvbnRhaW5lclxcXCI+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbiAgfSlcbjtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIENvbGxlY3Rpb25WaWV3LCBWaWV3LCBfcmVmLFxuICAgIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICAgIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG4gIFZpZXcgPSByZXF1aXJlKCcuL3ZpZXcnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb25WaWV3ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb2xsZWN0aW9uVmlldywgX3N1cGVyKTtcblxuICAgIGZ1bmN0aW9uIENvbGxlY3Rpb25WaWV3KCkge1xuICAgICAgX3JlZiA9IENvbGxlY3Rpb25WaWV3Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIF9yZWY7XG4gICAgfVxuXG4gICAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmdldFRlbXBsYXRlRnVuY3Rpb24gPSBWaWV3LnByb3RvdHlwZS5nZXRUZW1wbGF0ZUZ1bmN0aW9uO1xuXG4gICAgcmV0dXJuIENvbGxlY3Rpb25WaWV3O1xuXG4gIH0pKENoYXBsaW4uQ29sbGVjdGlvblZpZXcpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgVmlldywgX3JlZixcbiAgICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuICByZXF1aXJlKCcuLi8uLi9saWIvdmlldy1oZWxwZXInKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFZpZXcgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZpZXcsIF9zdXBlcik7XG5cbiAgICBmdW5jdGlvbiBWaWV3KCkge1xuICAgICAgX3JlZiA9IFZpZXcuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gX3JlZjtcbiAgICB9XG5cbiAgICBWaWV3LnByb3RvdHlwZS5nZXRUZW1wbGF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFZpZXc7XG5cbiAgfSkoQ2hhcGxpbi5WaWV3KTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIEhlYWRlclZpZXcsIFZpZXcsIF9yZWYsXG4gICAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbiAgVmlldyA9IHJlcXVpcmUoJy4uL2Jhc2UvdmlldycpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gSGVhZGVyVmlldyA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSGVhZGVyVmlldywgX3N1cGVyKTtcblxuICAgIGZ1bmN0aW9uIEhlYWRlclZpZXcoKSB7XG4gICAgICBfcmVmID0gSGVhZGVyVmlldy5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfcmVmO1xuICAgIH1cblxuICAgIEhlYWRlclZpZXcucHJvdG90eXBlLmF1dG9SZW5kZXIgPSB0cnVlO1xuXG4gICAgSGVhZGVyVmlldy5wcm90b3R5cGUuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG5cbiAgICBIZWFkZXJWaWV3LnByb3RvdHlwZS50YWdOYW1lID0gJ2hlYWRlcic7XG5cbiAgICBIZWFkZXJWaWV3LnByb3RvdHlwZS50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3RlbXBsYXRlcy9oZWFkZXInKTtcblxuICAgIHJldHVybiBIZWFkZXJWaWV3O1xuXG4gIH0pKFZpZXcpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgSG9tZVBhZ2VWaWV3LCBWaWV3LCBfcmVmLFxuICAgIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICAgIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG4gIFZpZXcgPSByZXF1aXJlKCcuLi9iYXNlL3ZpZXcnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IEhvbWVQYWdlVmlldyA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSG9tZVBhZ2VWaWV3LCBfc3VwZXIpO1xuXG4gICAgZnVuY3Rpb24gSG9tZVBhZ2VWaWV3KCkge1xuICAgICAgX3JlZiA9IEhvbWVQYWdlVmlldy5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfcmVmO1xuICAgIH1cblxuICAgIEhvbWVQYWdlVmlldy5wcm90b3R5cGUuYXV0b1JlbmRlciA9IHRydWU7XG5cbiAgICBIb21lUGFnZVZpZXcucHJvdG90eXBlLmNsYXNzTmFtZSA9ICdob21lLXBhZ2UnO1xuXG4gICAgSG9tZVBhZ2VWaWV3LnByb3RvdHlwZS50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3RlbXBsYXRlcy9ob21lJyk7XG5cbiAgICByZXR1cm4gSG9tZVBhZ2VWaWV3O1xuXG4gIH0pKFZpZXcpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgU2l0ZVZpZXcsIFZpZXcsIF9yZWYsXG4gICAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbiAgVmlldyA9IHJlcXVpcmUoJy4vYmFzZS92aWV3Jyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBTaXRlVmlldyA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2l0ZVZpZXcsIF9zdXBlcik7XG5cbiAgICBmdW5jdGlvbiBTaXRlVmlldygpIHtcbiAgICAgIF9yZWYgPSBTaXRlVmlldy5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfcmVmO1xuICAgIH1cblxuICAgIFNpdGVWaWV3LnByb3RvdHlwZS5jb250YWluZXIgPSAnYm9keSc7XG5cbiAgICBTaXRlVmlldy5wcm90b3R5cGUuaWQgPSAnc2l0ZS1jb250YWluZXInO1xuXG4gICAgU2l0ZVZpZXcucHJvdG90eXBlLnJlZ2lvbnMgPSB7XG4gICAgICBoZWFkZXI6ICcjaGVhZGVyLWNvbnRhaW5lcicsXG4gICAgICBtYWluOiAnI3BhZ2UtY29udGFpbmVyJ1xuICAgIH07XG5cbiAgICBTaXRlVmlldy5wcm90b3R5cGUudGVtcGxhdGUgPSByZXF1aXJlKCcuLi90ZW1wbGF0ZXMvc2l0ZScpO1xuXG4gICAgcmV0dXJuIFNpdGVWaWV3O1xuXG4gIH0pKFZpZXcpO1xuXG59KS5jYWxsKHRoaXMpO1xuIl19
;