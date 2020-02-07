import { Mercury } from './../src/mercury.js';

describe('Mercury', () => {
  test('should be able to create class', () => {
    let mercury = new Mercury();
    expect(mercury instanceof Mercury).toEqual(true);
  })

  test('should correctly convert user earth years into mercury years', () => {
    let mercury = new Mercury(30);
    expect(mercury.calcluateMercuryYears()).toEqual("6.9");

  });

});