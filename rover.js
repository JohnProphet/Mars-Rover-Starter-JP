const Message = require("./message");

class Rover {
   constructor(name, position, mode="NORMAL", wattage=110) {
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

   // { // OUTPUT = an OBJECT with 2 properties: "message" & "results"  
   //    message: 'Test message with two commands',
   //    results: [ // <-- results is an ARRAY with multiple "Command OBJECTS"
   //       { // this is the 1st OBJECT with results from the first Command object in the message
   //          completed: true
   //       },
   //       { // this is the 2nd OBJECT with results from the second Command object in the message
   //          completed: true, 
   //          roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 }
   //       }
   //    ]
   // }

}

module.exports = Rover;