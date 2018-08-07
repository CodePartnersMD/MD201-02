const returnFunc = require('./returnFunc.js')

test('returnFunc should be a function', () => {
    expect(typeof returnFunc).toEqual('function')
})

test('returnFunc should return "I am a string"', () => {
    let result = returnFunc('I am a string')
    expect(typeof result).toEqual('string')
    expect(result).toEqual('I am a string')
})

test('return func should return 5', () => {
    let result = returnFunc(5)
    expect(typeof result).toEqual('number')
    expect(result).toEqual(5)
})

