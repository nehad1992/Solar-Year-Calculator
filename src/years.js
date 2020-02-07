export class Years {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy;
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
  calculateJupiterYears() {
    let jupiterYears = this.age * 11.86;
    jupiterYears = jupiterYears.toFixed(1);
    return jupiterYears;
  }
  calculateSaturnYears() {
    let saturnYears = (this.age * 29.5).toFixed(1);
    return saturnYears;
  }
  calculateUranusYears() {
    let uranusYears = (this.age * 84).toFixed(1);
    return uranusYears;
  }
  calculateNeptuneYears() {
    let neptuneYears = (this.age * 164.8).toFixed(1);
    return neptuneYears;
  }
  calculatePlutoYears() {
    let plutoYears = (this.age * 284).toFixed(1);
    return plutoYears;
  }
  calculateLifeExpectancyofMercury(mercuryYears) {
    let lifeExpectancy = ((60 / this.age) * 7.2).toFixed(1);
    if (mercuryYears > lifeExpectancy) {
      return (parseFloat(mercuryYears) - parseFloat(lifeExpectancy)).toFixed(1);
    } else {
      return (parseFloat(lifeExpectancy) - parseFloat(mercuryYears)).toFixed(1);
    }

  }
  calculateLifeExpectancyofVenus(venusYears) {
    let lifeExpectancy = ((60 / this.age) * 0.62).toFixed(1);
    if (venusYears > lifeExpectancy) {
      return (parseFloat(venusYears) - parseFloat(lifeExpectancy)).toFixed(1);
    } else {
      return (parseFloat(lifeExpectancy) - parseFloat(venusYears)).toFixed(1);
    }
  }
  calculateLifeExpectancyofMars(marsYears) {
    let lifeExpectancy = ((60 / this.age) * 1.88).toFixed(1);
    if (marsYears > lifeExpectancy) {
      return (parseFloat(marsYears) - parseFloat(lifeExpectancy));
    } else {
      return (parseFloat(lifeExpectancy) - parseFloat(marsYears));
    }
  }
  calculateLifeExpectancyofJupiter(jupiterYears) {
    let lifeExpectancy = ((60 / this.age) * 11.86).toFixed(1);
    if (jupiterYears > lifeExpectancy) {
      return (parseFloat(jupiterYears) - parseFloat(lifeExpectancy));
    } else {
      return (parseFloat(lifeExpectancy) - parseFloat(jupiterYears));
    }

  }
  calculateLifeExpectancyofSaturn(saturnYears) {
    let lifeExpectancy = ((60 / this.age) * 29.5).toFixed(1);
    if (saturnYears > lifeExpectancy) {
      return (parseFloat(saturnYears) - parseFloat(lifeExpectancy));
    } else {
      return (parseFloat(lifeExpectancy) - parseFloat(saturnYears));
    }
  }
  calculateLifeExpectancyofUranus(uranusYears) {
    let lifeExpectancy = ((60 / this.age) * 84).toFixed(1);
    if (uranusYears > lifeExpectancy) {
      return (parseFloat(uranusYears) - parseFloat(lifeExpectancy));
    } else {
      return (parseFloat(lifeExpectancy) - parseFloat(uranusYears));
    }
  }
  calculateLifeExpectancyofNeptune(neptuneYears) {
    let lifeExpectancy = ((60 / this.age) * 164.8).toFixed(1);
    if (neptuneYears > lifeExpectancy) {
      return (parseFloat(neptuneYears) - parseFloat(lifeExpectancy));
    } else {
      return (parseFloat(lifeExpectancy) - parseFloat(neptuneYears));
    }
  }
  calculateLifeExpectancyofPluto(plutoYears) {
    let lifeExpectancy = ((60 / this.age) * 284).toFixed(1);
    if (plutoYears > lifeExpectancy) {
      return (parseFloat(plutoYears) - parseFloat(lifeExpectancy));
    } else {
      return (parseFloat(lifeExpectancy) - parseFloat(plutoYears));
    }
  }
}