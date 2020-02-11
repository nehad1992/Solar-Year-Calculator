import { Years } from './../src/years';
describe('Years', () => {

  test('should correctly convert earth years into mercury years', () => {
    let years = new Years(30);
    var my = years.calculateMercuryYears();
    expect(my).toEqual("7.2");
    expect(years.calculateLifeExpectancyofMercury(my)).toEqual("-7.2");
  });
  test('should correctly convert Earth years into Venus years', () => {
    let years = new Years(30);
    let vy = years.calculateVenusYears();
    expect(vy).toEqual("18.6");
    expect(years.calculateLifeExpectancyofVenus(vy)).toEqual("17.4");
  });
  test('should convert Earth years into Mars years', () => {
    let years = new Years(30);
    let my = years.calculateMarsYears();
    expect(my).toEqual("56.4");
    expect(years.calculateLifeExpectancyofMars(my)).toEqual(52.6);
  });
  test('should correctly convert Earth years into Jupiter years', () => {
    let years = new Years(30);
    let jy = years.calculateJupiterYears();
    expect(jy).toEqual("355.8");
    expect(years.calculateLifeExpectancyofJupiter(jy)).toEqual(332.1);
  });
  test('should correctly convert Earth years into Saturn years', () => {
    let years = new Years(30);
    let sy = years.calculateSaturnYears();
    expect(years.calculateSaturnYears()).toEqual("885.0");
    expect(years.calculateLifeExpectancyofSaturn(sy)).toEqual(826);
  });
  test('should correctly convert Earth years into Uranus years', () => {
    let years = new Years(30);
    let uy = years.calculateUranusYears();
    expect(uy).toEqual("2520.0");
    expect(years.calculateLifeExpectancyofUranus(uy)).toEqual(2352);
  });
  test('should correctly convert Earth years into Neptune years', () => {
    let years = new Years(30);
    let ny = years.calculateNeptuneYears();
    expect(ny).toEqual("4944.0");
    expect(years.calculateLifeExpectancyofNeptune(ny)).toEqual(4614.4);
  });
  test('should correctly convert Earth years into Pluto years', () => {
    let years = new Years(30);
    let py = years.calculatePlutoYears();
    expect(py).toEqual("8520.0");
    expect(years.calculateLifeExpectancyofPluto(py)).toEqual(7952.0);
  });
});