const Employee = require('../lib/employee')

test('Creates an Employee Class', ()=>{
    const employee = new Employee('Cody',1,'codyjunier@gmil.com')
    
    expect(typeof(employee)).toBe('object')
    expect(employee.getName()).toBe('Cody')
    expect(employee.getId()).toBe(1)
    expect(employee.getEmail()).toBe('codyjunier@gmil.com')
    expect(employee.getRole()).toBe('Employee')
});

