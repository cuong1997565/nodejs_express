///Truyền dữ liệu kiểu JSON | Serving JSON Data
var http = require("http");
var file = require("fs");
var server = http.createServer(function(req, res){
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        var docluong = file.createReadStream(__dirname+'/index.html','utf8');
        docluong.pipe(res);
    } else if (req.url === '/login'){
        res.writeHead(200, {'Content-Type':'text/html'});
        var docluong = file.createReadStream(__dirname+'/login.html','utf8');
        docluong.pipe(res);
    } else if(req.url === '/api/register') {
        var register = [{name: 'sky albert'},{age:'21', username: 'admin'}, {password: 123456}];
        res.writeHead(200,  {'Content-Type':'application/json'});
        res.end(JSON.stringify(register));
    } else if(req.url === '404'){
        res.writeHead(200, {'Content-Type':'text/html'});
        var docluong = file.createReadStream(__dirname+'/404.html','utf8');
        docluong.pipe(res);
    }
});
server.listen(8888,'127.0.0.1');
console.log("server runing on port 8888");