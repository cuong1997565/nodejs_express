var fs = require('fs');
var readableStream = fs.createReadStream(__dirname+ '/data.txt',{encoding: 'utf8'});
// console.log(data);

// var data2 = fs.readFile(__dirname+'/data.txt','utf8',function(err, data){
//         console.log(data);
//         console.log("__dirname :"+__dirname);
// });

var writetableStream = fs.createWriteStream(__dirname+'./data2.txt');
readableStream.on('data', function(dataChunk){
    console.log(dataChunk);
    writetableStream.write(dataChunk);
});