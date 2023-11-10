const Message = require("./message");

class Rover {
   constructor(name, position, mode="NORMAL", wattage=110) {
      this.position = position;
      this.mode = mode;
      this.wattage = wattage;
   }
   recieveMessage(message) {
      let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
      let message = new Message('Test message with two commands', commands);
      let rover = new Rover(98382);    // Passes 98382 as the rover's position.
      let response = {
         message : message.name,
         results : []
      }
      return response;
      }

}

module.exports = Rover;