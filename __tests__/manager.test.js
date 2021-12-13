const { expect } = require('@jest/globals')
const Manager = require('../lib/manager')

test('Creates a manager role', ()=>{
    const manager = new Manager('Cody',1,'codyjunier@gmil.com', 120)

    expect(typeof(manager)).toBe('object')
    expect(manager.officeNumber()).toEqual(expect.any(Number))
    expect(manager.getRole()).toBe('Manager')

})
