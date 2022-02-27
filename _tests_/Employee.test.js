const Employee = require('../lib/Employee');


test('is employee an object?',() => {
    const e = new Employee ();

    expect(typeof(e)).toBe('object');
});

test('can we set the name?',() => {
    const name = 'Alexa';
    const e = new Employee (name);

    expect(e.name).toBe(name);
});

test('can we set the ID?',() => {
    const id = 94;
    const e = new Employee ('Alexa', id);

    expect(e.id).toBe(id);
});

test('can we set the email?',() => {
    const email = 'test@test.com';
    const e = new Employee ('Alexa', 5, email);

    expect(e.email).toBe(email);
});

test('does get role pull Employee',() => {
    const e = new Employee();

    expect(e.getRole()).toBe('Employee');
});

module.exports = Employee;