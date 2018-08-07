const mathFunc = require('./mathFunc')

test('mathFunc should be function', () => {
    expect(typeof mathFunc).toEqual('function')
})

test('should evaluate to 4', () => {
    expect(mathFunc(2)).toEqual(4)
})

test('should evaluate to 7', () => {
    expect(mathFunc(5)).toEqual(7)
})

test('should evaluate to 4', () => {
    expect(mathFunc(10)).toEqual(12)
})

test('strFunc should be function', () => {
    expect(typeof strFunc).toEqual('function')
})