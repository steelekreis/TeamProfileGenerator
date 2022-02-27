const Manager = require('../lib/Manager');

test('is manager an object?',() => {
    const manager = new Manager ();

    expect(typeof(manager)).toBe('object');
});


test('is manager object created with info needed', () => {
    const name = 'bob';
    const id = 27;
    const email = 'bob@bob.com';
    const officeNumber = 12;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.name).toBe(name);

    expect(manager.id).toBe(id);
    expect(manager.id).toEqual(expect.any(Number));

    expect(manager.email).toBe(email);
    expect(manager.email).toEqual(expect.stringContaining('@'));
    
    expect(manager.officeNumber).toBe(officeNumber);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('does get role pull Manager',() => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});