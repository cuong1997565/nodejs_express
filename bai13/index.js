var express = require("express");
var bodyParser = require('body-parser');
var multer = require("multer");

var app = express();
var urlendcodedParser = bodyParser.urlencoded({extended:false});

//cau hinh ejs
app.set("view engine", "ejs");
app.set("views","./views");

app.get("/khoapham", function(req, res){
    res.render("khoapham");
});

app.get("/chitiet", function(req, res) {
    res.render("chitiet", { hoten: "Nguyễn Xuân Cương" });
});

app.listen(3000 , function(){
    console.log("connect serve success");
});

app.get("/hello", function(req, res) {
      res.send("<font color=red>GET HELLO KHOA PHAM NODEJS</font>");
});

app.post("/hello", urlendcodedParser, function(req, res) {
    var u = req.body.username;
    var p = req.body.password;
    res.send("Username :"+ u +" Password :"+ p);
});

app.get("/tintuc/:id",function(req, res){
    var i = req.params.id;
    res.send("Server nhan duoc id="+ i);
});


app.get("/upload", function(req, res){
     res.render("upload");
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
var upload = multer({storage: storage});

app.post("/upload", upload.single("file"),  function(req, res){
    console.log(req.file);
    res.send("UPLOAD FILE SUCCESS");
});
