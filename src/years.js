export class Years {
  constructor(age) {
    this.age = age;
    const mercury = 0.24;
    const venus = 0.62;
    const mars = 1.88;
    const jupiter = 11.86;
  }
  calculateMercuryYears() {
    let mercuryYears = this.age * 0.24;
    mercuryYears = mercuryYears.toFixed(1);
    return mercuryYears;
  }
  calculateVenusYears() {
    let venusYears = this.age * 0.62;
    venusYears = venusYears.toFixed(1);
    return venusYears;
  }
  calculateMarsYears() {
    let marsYears = this.age * 1.88;
    marsYears = marsYears.toFixed(1);
    return marsYears;
  }
}