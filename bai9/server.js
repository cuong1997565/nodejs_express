///Truyền dữ liệu kiểu JSON | Serving JSON Data
var http = require("http");
var file = require("fs");
var server = http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type':'application/json'});
        var doituong = {
            ten: 'Toan',
            nghenghiep: 'Designer',
            age: '21',
            que: 'Hà nội'
        };
        res.end(JSON.stringify(doituong));
});
server.listen(8888,'127.0.0.1');
console.log("server runing on port 8888");