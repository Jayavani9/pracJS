// revStr.test.js

// Import the function to test
const revStr = require('./revStr');

// Tests
test('reverses a simple string', () => {
    expect(revStr('JavaScript')).toBe('tpircSavaJ');
});

test('reverses a palindrome', () => {
    expect(revStr('racecar')).toBe('racecar');
});

test('reverses an empty string', () => {
    expect(revStr('')).toBe('');
});

test('reverses a string with spaces', () => {
    expect(revStr('OpenAI GPT')).toBe('TPG IAnepO');
});

test('reverses a sentence with punctuation', () => {
    expect(revStr('Hello, Beautiful')).toBe('lufituaeB ,olleH');
});

test('reverse a string with all capital', () =>{
    expect(revStr('HELLO CUTIE !!')).toBe('!! EITUC OLLEH');
});
