var express = require("express");

var todoController = require('./controllers/todoController');

var app = express();

todoController(app);

app.set('view engine','ejs');

app.use(express.static('./public'));

app.listen(4444);

console.log('Server running 4444');
