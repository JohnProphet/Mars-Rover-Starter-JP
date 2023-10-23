const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
// Rover recieves message OBJECT
// UPDATES its properties from the message
// and RETURNS results

describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", function() {
    expect( function() { new Message();}).toThrow(new Error("Default values required"));
  });


});
