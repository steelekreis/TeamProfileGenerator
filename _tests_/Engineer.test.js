const Engineer = require('../lib/Engineer');

test('is engineer an object?',() => {
    const engineer = new Engineer ();

    expect(typeof(engineer)).toBe('object');
});


test('is engineer object created with info needed', () => {
    const name = 'Javier';
    const id = 3;
    const email = 'Javier@Javier.com';
    const gitHub = 'Javierrepos12';
    const engineer = new Engineer(name, id, email, gitHub);

    expect(engineer.name).toBe(name);

    expect(engineer.id).toBe(id);
    expect(engineer.id).toEqual(expect.any(Number));

    expect(engineer.email).toBe(email);
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    
    expect(engineer.gitHub).toBe(gitHub)
});

test('does get role pull Engineer',() => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});