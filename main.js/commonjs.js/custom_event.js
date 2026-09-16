import {EventEmitter} from 'events'

const emitter = new EventEmitter()

// Event register using .on() method
emitter.on("login", callback)