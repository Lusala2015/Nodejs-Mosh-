
const EventEmitter = require('events');

emitter.on('messageLogged',(arg) => {
    console.log('Listener called', arg);
}) ;

const Logger = require ('./logger');
const logger = new Loger ();
logger.log('message');