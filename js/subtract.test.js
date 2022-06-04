const subtract = require('./subtract')

test('properly adds two numbers', () => {
    expect(
        subtract(1, 2)
        ).toBe(-1)
})