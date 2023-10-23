class Rover {
   constructor(position, result) {
     this.position = position;
       if (!position) {
       throw Error("Number required as position.");
        }
        // let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        // let result = rover.recieveMsg(message);
        // let mode = "NORMAL";
        // let generatorWatts = 110;

      }
}

module.exports = Rover;