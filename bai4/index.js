var file = require("fs");
//sync
// var readFile = file.readFileSync('test.txt','utf8');
// console.log(readFile);
// var writeFile = file.writeFileSync('testwrite.txt', readFile);

// console.log("Bat dau");
// //not sync func: 
// var readFileNot = file.readFile('test.txt','utf8', function(err, data){
//         if(true) {
//             console.log("đúng :"+ data);
//         } else{
//             return 'sai';
//         }
// });

// console.log("Ket thuc");


// remove file by unlink
// file.unlinkSync("testwrite.txt");

//create folder 
// file.mkdirSync('foldertest');

file.mkdir('public', function(){
    file.readFile('test.txt','utf8',function(err, data){
        file.writeFileSync('./public/result.txt',data);
    });
});
