
const EventEmitter = require('events');

// Create class
class MyEmmitter extends EventEmitter{ }

// Init Object 
const myEmitter = new MyEmmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired'));

// Init event
myEmitter.emit('event');

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');