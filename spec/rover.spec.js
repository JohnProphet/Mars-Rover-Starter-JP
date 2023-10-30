const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
// Rover recieves message OBJECT
// UPDATES its properties from the message
// and RETURNS results

describe("Rover class", function() {
  //test 7
    it("constructor sets position and default values for mode and generatorWatts", function() {
        let sampleRoverObject = new Rover(98382);   //good
        expect(sampleRoverObject.mode).toBe("NORMAL"); //good
        expect(sampleRoverObject.wattage).toBe(110); //this should check sameRoverObject.generaterWatts to be 110
      });
      
  //test 8
//   it("response returned by recieveMessage contains the name of the message", function() {
//     let sampleRoverObject = new Rover(98382)
//     let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
//     let message = new Message('Test message with two commands', commands);
//     let sampleMessage = sampleRoverObject.receivemessage(message)
//     expect(sampleMessage.name).toBe('Test message with two commands')  
//   });

// //test 9 
//    it("response returned by recieveMessage includes two results if two commands are sent in the message", function() {
//     let sampleRoverObject = new Rover("Duckman", 98382, "NORMAL");    //expect two results
//     expect(sampleRoverObject.position).toBe(98382);
//     expect(sampleRoverObject.status).toBe("NORMAL");

//   })  
//   });

  //test 10
it("responds correctly to the status check command", function() {
  let commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("STATUS_CHECK")];
  let message = new Message("sending a status check", commands);
  let sampleRoverObject = new Rover(98382);    
  let response = sampleRoverObject.receiveMessage(message);
  expect(response.results[1].roverStatus.position).toEqual(98382);
  expect(response.results[1].roverStatus.mode).toEqual("LOW_POWER");
  expect(response.results[1].roverStatus.generatorWatts).toEqual(110);
});

//   //test 11
//   it("responds correctly to the mode change command", function() {
//   })

//   //test 12
//   it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
//   })
//   //test 13
//   it("responds with the position for the move command", function () {
//   })
});

