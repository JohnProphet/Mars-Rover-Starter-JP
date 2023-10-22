class Rover {
   constructor(position, commands, result) {
     this.position = position;
       if (!position) {
       throw Error("Number required as position.");
        }
        this.commands = commands;
        this.result = result;
      }
}

module.exports = Rover;