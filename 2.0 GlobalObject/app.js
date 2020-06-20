console.log();//global object

setTimeout();//call a function after a delay
clearTimeout();//

setInterval();// repeatedly call a function after a given delay
clearInterval();// to stop a function from being callled repeatedly

window.console.log();


// gives undefined in the console 
// variables anfd functions defined here are  they are not added to the global object, they are only scoped to this file  app.js
var message = '';
console.log(global.message);