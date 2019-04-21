//Khởi tạo Server đơn giản trong Node JS

var http = require("http");
var server = http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('chay xong roi ');
});
server.listen(8888,'127.0.0.1');
console.log("server runing on port 8888");