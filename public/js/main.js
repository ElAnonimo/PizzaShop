(function() {
  var x = {
    name: "Mikki",
    gender: "male"
  };

  "use strict";

  /**
   * Submits an order
   * @param parameters
   */
  function submitOrder(parameters) {
    var validate = parameters.validate;
    var size = parameters.size;
    var crust = parameters.crust;
    var toppings = parameters.toppings;
    alert("something");
  }

  $(document).ready(function() {
    $("#orderForm").on("submit", function() {
      submitOrder({validate: false, size: "large", crust: "thin", toppings: ["pepperoni", "sausage"]});
      return false;
    });
  });

  var dog = new Animal();
  dog.name = "Bark";
  dog.legCount = 4;
  dog.feed("Yummy");

  var toInsert = "<div>\n  <ul>\n    <li>Lorem ipsum dolor.</li>\n    <li>Possimus sit, ullam.</li>\n    <li>Dolorem quis, quos.</li>\n    <li>Animi, quo tempora.</li>\n    <li>Distinctio tenetur, veritatis?</li>\n  </ul>\n</div>";
  var toExecute = "var x = 0;\nx++;\nx = 5;";
  var regExp = "[0-9A-Za-z ]*";
})();
(function() {
    "use strict";
    
    
    
    
    
})();