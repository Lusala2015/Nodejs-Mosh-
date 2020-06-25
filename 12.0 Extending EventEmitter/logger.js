const { EventEmitter } = require("events");
const emitter = new EventEmitter();


var url = 'http://mylogger.io/log';

class Logger {
    log(message){
        //send a HTTP request
        console.log(message);
        
        emitter.emit('messageLogged',{id: 1, url: 'http://'});
    }
}


module.exports = log;