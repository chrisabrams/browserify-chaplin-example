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
