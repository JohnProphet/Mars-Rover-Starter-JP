class Rover {
   constructor(position, result) {
     this.position = position;
       if (!position) {
       throw Error("Number required as position.");
        }
        // this.commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        this.result = rover.recieveMsg(message);
        this.mode = "NORMAL";
        if (!mode) {
          throw Error("Default values required");
        }
        this.generatorWatts = 110;
        if (!generatorWatts) {
          throw Error("Default values required");
        }
        
      }
}

module.exports = Rover;