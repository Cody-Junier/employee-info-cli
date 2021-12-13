const Intern = require('../lib/intern')


test('Creates a manager role', ()=>{
    const intern = new Intern('Cody',1,'codyjunier@gmil.com', 'Vanderbilt')

    expect(typeof(intern)).toBe('object')
    expect(intern.getSchool()).toEqual(expect.any(String))
    expect(intern.getRole()).toBe('Intern')

})
