const loop = require('./loops')


test('newObj should be function', () => {
    expect(typeof loop).toEqual('function')
})

test('newObj should be function', () => {
    expect(typeof loop(['string', 'this'])).toEqual('string')
})

test('Zach should be a new object with properties of name:Zach, age:33, and jobTitle:Instructor', () => {
    expect(loop(['Zach', 'Patrice', 'Amanda'])).toEqual('ZachPatriceAmanda')
})


test('Zach should be a new object with properties of name:Zach, age:33, and jobTitle:Instructor', () => {
    expect(loop([4, 5, 1])).toEqual('451')
})



