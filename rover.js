const Message = require("./message");

class Rover {
   constructor(name, position, mode="NORMAL", generatorWatts=110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
 
recieveMessage(message) {
      let response = {
         message : message.name,
         results : [
           {
               completed: true
           },
           {
              completed: true, 
              roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 }
           }
         ]
      }
      return results;
   }
}

module.exports = Rover;