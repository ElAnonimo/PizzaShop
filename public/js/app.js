// app.js
(function() {
    "use strict";
    var module = angular.module("pizzaApp", ["ngRoute"]);

    module.config(function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'templates/order.tmpl.html',
        controller: 'orderController',
        controllerAs: 'order'
      });
      $routeProvider.when('/status', {
        templateUrl: 'templates/status.tmpl.html',
        controller: 'statusController',
        controllerAs: 'status'
      });

      $routeProvider.otherwise({redirectTo: '/'});
    });
    
    module.controller("orderController", function() {
      var order = this;

      order.orderCount = 0;

      order.submitOrder = function() {
        order.orderCount++;
      };
    });

    module.controller("statusController", function() {
      var status = this;

      status.steps = [
        {num: 1, name: "Mike Pie"},
        {num: 2, name: "Bake Pie"},
        {num: 3, name: "Box Pie"},
        {num: 4, name: "Queue Pie"},
        {num: 5, name: "Deliver Pie"},
      ];

      status.currentStep = 3;
    });

  /**
   * @hbvjhb kijubhkjb
   */
  module.directive('statusBar', function() {
      return {
        link: function(scope, element, attrs) {
          element.text("This is the statusBar");
        },
        restrict: 'E'
      };
    });
    
})();