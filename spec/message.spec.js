const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {
    
    it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
        expect( function() { new Message();}).toThrow(new Error("Name required as first parameter."));
      });

    it("constructor sets name", function() {
        let sampleMsg = new Message("sampleRover", 0)
        expect(sampleMsg.name).toBe("sampleRover");
      });  
    
    it("contains a commands array passed into the constructor as the 2nd argument", function() {
        let commands = [];
        let sampleMsg = new Message("sampleRover", commands) 
        expect(sampleMsg.commands).toStrictEqual([]);
     });

    });
