const Message = require("./message");

class Rover {
   constructor(position, mode="NORMAL", wattage=110) {
      this.position = position;
      this.mode = mode;
      this.wattage = wattage;
      }
   recieveMessage(message) {
      let response = {
         message : message.name,
         results : []
      }
      return response;
   }

}

module.exports = Rover;