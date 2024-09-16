// The require function is used to import modules in Node.js. It takes one argument, the path to the module.
// The test function is a function that is part of the Jest framework.
const { describe, it, expect } = require('@jest/globals');
// The describe function is used to group tests. It takes two arguments: a string and a function.
// The string is the name of the test group, and the function is the test group itself.
const { add , sub } = require('../index');
describe('add', () => {
    // The it function is used to define individual tests. It takes two arguments: a string and a function.
    // The string is the name of the test, and the function is the test itself.
    it('should add two numbers', () => {
        // The expect function is used to make assertions in Jest. It takes one argument, the value to be tested.
        // The toBe function is a matcher that checks if the value is equal to the expected value.
        expect(add(1, 2)).toBe(3);
    });
   it('should subtract two numbers', () => {
        // The expect function is used to make assertions in Jest. It takes one argument, the value to be tested.
        // The toBe function is a matcher that checks if the value is equal to the expected value.
        expect(sub(1, 2)).toBe(-1);
    });
});