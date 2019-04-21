// console.log("hello word");

// var time = 0;
// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + " Loop ");
//     if(time > 7){
//         clearInterval(timer);
//     }
// },2000);

function callFunc(func) {
    func();
}

var sayHello = function() {
    console.log("Hello");
}

var sayHi = function() {
    console.log("Hi");
}

callFunc(sayHello);
callFunc(sayHi);