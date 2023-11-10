const Rover = require('./rover.js');
const Command = require('./command.js');
const Message = require('./message.js');


let sampleRover = new Rover;
let commands = [
    new Command('MOVE', 4321),
    new Command('STATUS_CHECK'),
]
let messages = new Message('Test Message with two commands', commands)
let results = [
    {
        completed: true
    },
    {
       completed: true, 
       roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 }
    }
]
console.log(messages);



