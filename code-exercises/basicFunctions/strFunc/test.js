const strFunc = require('./strFunc')

test('strFunc should be function', () => {
    expect(typeof strFunc).toEqual('function')
})

test('strFunc should be a string', () => {
    expect(typeof strFunc('This is', 'a string')).toEqual('string')
})

test('should evaluate to "You Rock"', () => {
    expect(strFunc('You', 'Rock')).toEqual('You Rock')
})