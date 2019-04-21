//call module express 
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 

app.set('view engine','ejs');
app.use('/assets', express.static('stuff'));
var urlphantich = bodyParser.urlencoded({extends: false});

app.get('/', function(req, res){
     res.render('index');
});

app.get('/contact/:userId/send/:content', function(req, res){
    res.send('Customer have id '+ req.params.userId + ' content :'+ req.params.content);
});

app.get('/register/:userId',function(req, res){
    var infor = {
        name: 'Sky Albert',
        age: '21',
        email: 'cuong1997565@gmail.com',
        hobbiens: ['books','playstation','programming','go out']
    }
    res.render('register', { id: req.params.userId, information: infor });
});


app.get('/contact', function(req, res){
     res.render('contact');
});

app.post('/contact',urlphantich, function(req,res) {
     console.log(req.body);
     res.render('contact-success',{data: req.body});
});


app.listen(8081);