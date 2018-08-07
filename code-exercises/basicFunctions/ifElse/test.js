const ifElse = require('./ifElse') //eslint-disable-line

test('ifElse should be a function', () => { //eslint-disable-line
    expect(typeof ifElse).toEqual('function') //eslint-disable-line
})

test('ifElse should return true', () => { //eslint-disable-line
    expect(ifElse(11)).toBeTruthy() //eslint-disable-line
})

test('ifElse should return false', () => { //eslint-disable-line
    expect(ifElse(9)).toBeFalsy() //eslint-disable-line
})

beforeEach(() => {
    jest.spyOn(console, 'log')
})

afterEach(() => {
    console.log.mockRestore()
})