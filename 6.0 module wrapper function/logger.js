var x =;
var url = 'http://mylogger.io/log';
 
function log(message){
    //send a HTTP request
    console.log(message);
}

module.exports= log;
