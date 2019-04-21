// Tìm hiểu về sự kiện on() và emit() | Event Emitter Node JS
//import modules events
// var sukien = require('events');

// //create EventEmiter
// var test = new sukien.EventEmitter();
// test.on("someThing", function(msg){
//     console.log(msg);
// });

// test.emit("someThing","Hello guy, How are you");
////////////////////////
var sukien = require('events');
var hamchinh = require('util');

// create function express
var Person = function(name) {
    this.name = name;
}
hamchinh.inherits(Person, sukien.EventEmitter);

var skyalbert = new Person("toan");
var blackfox  = new Person("hai");
var dealfox   = new Person("trung");

var people = [ skyalbert, blackfox, dealfox];

//For each when create that person will say hello guy
people.forEach(function(person){
    person.on("talk", function(msg){
        console.log(person.name+ ' said that: '+ msg);
    });
});
blackfox.emit('talk','hello guy');
skyalbert.emit('talk','hello guy');
dealfox.emit('talk','hello guy');