var bodyParser = require('body-parser');
var urlcodedParser = bodyParser.urlencoded({extended: false});
var data = [
   {item: 'go to school'},
   {item: 'go to movie'},
   {item: 'go out'}
];
module.exports = function(app) {
    app.get('/todo', function(req,res){ 
            res.render('todos',{todos: data});
    });

    app.post('/todo', urlcodedParser,  function(req,res){ 
            data.push(req.body);
            res.json(data);
        });

    app.delete('/todo', function(req,res){ 

    });


}