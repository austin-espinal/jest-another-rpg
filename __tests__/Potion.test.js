const Potion = require('../lib/potion.js');

jest.mock('../lib/potion');
console.log(new Potion());

test('create a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});