const { expect } = require('@jest/globals')
const cloneArray = require('./cloneArray')

test('properly clones array', () =>{
    const array = [1, 2, 3]
    // expect(cloneArray(array)).toBe(array), have the same value though not the same memory address.
    expect(cloneArray(array)).toEqual(array)

})