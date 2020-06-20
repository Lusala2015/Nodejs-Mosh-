var url = 'http://mylogger.io/log';
function log(message){
    //send a HTTP request
    console.log(message);
}

module.exports.log = log;// implementation for public interface 
//module.exports.url = url;//implimentation details that we need not to know about?!!
//module.exports.endPoint = url;// you can change the name of the item being exported.
