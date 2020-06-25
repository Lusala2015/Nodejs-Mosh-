
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged',(arg) => {
    console.log('Listener called', arg);
}) ;

const Logger = require ('./logger');
Logger('message');