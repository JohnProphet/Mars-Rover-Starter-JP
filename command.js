class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
  }
class Message {
    constructor(name, value) {
      this.name = name;
      if (!name) {
        throw Error("Name required as first parameter.");
      }
      this.value = value;
    }
  
 }
 
 module.exports = Command;