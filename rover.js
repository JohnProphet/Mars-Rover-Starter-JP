const Message = require("./message");

class Rover {
   constructor(position, mode="NORMAL", generatorWatts=110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
 
   receiveMessage(message) { // ALLOWS ROVER TO INTERPRET COMMUNICATIONS FROM COMMAND
      let response = {
         message : message.name,
         results : []
      }

      for (let i=0; i<message.commands.length; i++) { // DETERMINES WHAT THE COMMAND IS AND PUSHES APPROPRIATE MESSAGES TO RESULTS
         if (message.commands[i].commandType === "STATUS_CHECK") { // LOGIC FOR STATUS CHECK COMMAND
            response.results.push(
               {
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position,
                  }
               })
         } else if (message.commands[i].commandType === "MODE_CHANGE") { // LOGIC FOR MODE CHANGE COMMAND
            response.results.push(
               {
               completed: true
               }
            )
            this.mode = message.commands[i].value
            } else if (message.commands[i].commandType === "MOVE") {  //LOGIC FOR MOVE COMMAND
               if (this.mode === "NORMAL") {
                  response.results.push( // pushes "NORMAL" to results (we're good to go!)
                     {
                     completed: true
                     }
                  )
                this.position = message.commands[i].value; }
                else if (this.mode === "LOW_POWER") { // LOGIC FOR LOW POWER COMMAND
                  response.results.push( // pushes "LOW_POWER" to results (no movement possible)
                     {
                     completed: false
                     }
                  )
                }
            } 
         }
      return response;
   }
}

module.exports = Rover;