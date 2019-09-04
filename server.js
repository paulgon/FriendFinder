var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// // POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function(req, res) {
// 	res.send('welcome, ' + req.body.username);
// });

// // POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function(req, res) {
// 	// create user in req.body
// });

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});