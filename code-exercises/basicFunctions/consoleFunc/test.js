const consoleFunc = require('./consoleFunc') //eslint-disable-line

test('consoleFunc should be a function', () => { //eslint-disable-line
    expect(typeof consoleFunc).toEqual('function') //eslint-disable-line
})

test('consoleFunc should print "I am a string" to the console', () => {
    consoleFunc('I am a string')

    expect(typeof console.log.mock.calls[0][0]).toEqual('string')
    expect(console.log.mock.calls[0][0]).toEqual('I am a string')
})

test('consoleFunc should print 1 to the console', () => {
    consoleFunc(1)

    expect(typeof console.log.mock.calls[0][0]).toEqual('number')
    expect(console.log.mock.calls[0][0]).toEqual(1)
})

beforeEach(() => {
    jest.spyOn(console, 'log')
})

afterEach(() => {
    console.log.mockRestore()
})