// function express
var dem = function(arrMang) {
    return ' There are ' + arrMang.length + ' element in Array';
}

var tinh = function(a,b) {
    return `Sum is ${ a+b }`;
}

var chao = function(){
    console.log("Hello = Chào");
}
//cách 1
// module.exports.demtest = dem;
// module.exports.tinhtest = tinh;
// module.exports.chaotest = chao;
//cách 2 
module.exports = {
    demtest : dem,
    tinhtest : tinh,
    chaotest : chao
};