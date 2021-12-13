const Engineer = require('../lib/engineer')

test('Creates an engineer role', ()=>{
    const engineer = new Engineer('Cody',1,'codyjunier@gmil.com', 'cody-junier')

    expect(typeof(engineer)).toBe('object')
    expect(engineer.getGitHub()).toEqual(expect.any(String))
    expect(engineer.getRole()).toBe('Engineer')

})

