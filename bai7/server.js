// read file
// var file = require('fs');

// var docluong = file.createReadStream(__dirname + '/data.txt',{encoding: 'utf8'});
// var ghiluong = file.createWriteStream(__dirname+'/writeMe.txt');

// ///
// // docluong.on('data', function(chunk) {
// //     console.log('Đọc luồng nào: ');
// //     console.log(chunk);
// // })
// /////////////
// docluong.on('data', function(chunk){
//     console.log('Ghi luong nao: ');
//     ghiluong.write(chunk);
// });
////////////////////
var http = require("http");
var file = require("fs");
var server = http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type':'text/plain'});
        var docluong = file.createReadStream(__dirname+'/data.txt','utf8');
        docluong.pipe(res);
});
server.listen(8888,'127.0.0.1');
console.log("server runing on port 8888");