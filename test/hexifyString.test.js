import hexifyString from '../dist/hexifyString';

describe('hexify a string', () => {
  it('should correctly transform a string into a six digit hexadecimal number', () => {
    const result = hexifyString('Hello');
    expect(result.length).toEqual(6);
  });

  it('should correctly transform a string into the expected hexadecimal number', () => {
    const result = hexifyString('Hello');
    expect(result).toEqual('173360');
  });

  it('should return the same result for the same string passed to it', () => {
    const results = [];
    for (let i = 0; i < 5; i++) {
      results.push(hexifyString('Hello'));
    }
    results.forEach(result => expect(result).toEqual('173360'));
  });
})