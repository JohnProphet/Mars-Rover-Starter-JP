const Message = require("./message");

class Rover {
   constructor(name, position, mode="NORMAL", wattage=110) {
      this.position = position;
      this.mode = mode;
      this.wattage = wattage;
   }
   recieveMessage(message) {
      let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
      let response = {
            message : message.name,
            results : [ 
                 { // this is the 1st OBJECT with results from the first Command object in the message
//               completed: true
                 },
               
                 { // this is the 20nd OBJECT with results from the second Command object in the message
//               completed: true, 
//               roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 }
                 }
            ]
      }
      console.log(response); //use this to get template to match example, remove when working
      return response;
   }
}
  
module.exports = Rover;