const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Rover class", function() {
//test 7 - Sets position and default values for mode and generatorWatts
  it("constructor sets position and default values for mode and generatorWatts", function() {
    let sampleRover = new Rover(98382);   
      expect(sampleRover.mode).toBe("NORMAL"); 
      expect(sampleRover.generatorWatts).toBe(110);
    });
      
//test 8 - Checks that receiveMessage contains name of message
  it("response returned by recieveMessage contains the name of the message", function() {
    let sampleRover = new Rover(98382);
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('sampleRover', commands);
      expect(sampleRover.receiveMessage(message).message).toBe("sampleRover");  
    });

//test 9 Checks that receiveMessage includes two results if message contains two commands
  it("response returned by recieveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command('STATUS_CHECK'), new Command('STATUS_CHECK')];
    let message = new Message('sampleRover', commands);
    let sampleRover = new Rover(1);    //expect two results
      expect(sampleRover.receiveMessage(message).results.length).toEqual(2);
    })  
    });

//test 10 - Checks that rover responds correctly to "STATUS_CHECK"
  it("responds correctly to the status check command", function() {
    let commands = [new Command("STATUS_CHECK")];
    let message = new Message("Sending status check", commands);
    let sampleRover = new Rover(98382, "NORMAL", 110);    
    sampleRover.receiveMessage(message);
    expect(sampleRover.receiveMessage(message).results[0].roverStatus).toEqual(
    expect.objectContaining(
      {
        mode: "NORMAL",
        generatorWatts: 110,
        position: 98382,
      })
    )
});

//test 11 - Checks that rover responds correctly to "MODE_CHANGE"
  it("responds correctly to the mode change command", function() {
    let commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("STATUS_CHECK")];
    let message = new Message("Changing mode", commands);
    let sampleRover = new Rover(98382);    
    sampleRover.receiveMessage(message);
    expect(sampleRover.receiveMessage(message).results[0].completed).toBe(true);
    })

//test 12 - Rover should fail to move when roverStatus is "LOW_POWER"
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    let commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("MOVE", 10101)];
    let message = new Message("Changing mode", commands);
    let sampleRover = new Rover(98382);    
    sampleRover.receiveMessage(message);
    expect(sampleRover.receiveMessage(message).results[1].completed).toEqual(false);
    expect(sampleRover).toEqual(
      expect.objectContaining(
        {
          mode: "LOW_POWER",
          generatorWatts: 110,
          position: 98382,
        }
      ))
  })

//test 13 - Responds with new position when told to "MOVE"
  it("responds with the position for the move command", function () {
    let commands = [new Command("MOVE", 10101), new Command("STATUS_CHECK")];
    let message = new Message("Changing mode", commands);
    let sampleRover = new Rover(98382);    
    sampleRover.receiveMessage(message);
    expect(sampleRover.position).toBe(10101);
  })
