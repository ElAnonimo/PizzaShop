var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var hb = require('express-handlebars');
app.engine('handlebars', hb());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('home', {title: 'Hello from WebStorm', message: 'Hi there!'});
});

app.get('/api/toppings', function(req, res) {
  res.status(200);
  res.set('content-type', 'application/json');
  res.send(['pepperoni', 'sausage', 'spinach', 'mushrooms', 'ham', 'pineapple']);
});

var server = http.createServer(app);

// var server = http.createServer(function(req, res) {
//   res.write('<html>\n  <body>\n    <h1>Hello from WebStorm</h1>\n  </body>\n</html>');
//   res.end();
// });

server.listen(3000);