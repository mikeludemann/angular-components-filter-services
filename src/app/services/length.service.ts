import { Injectable } from '@angular/core';

@Injectable()
export class LengthService {

  constructor() { }

  public feetToMeter(x: number): number {

    return x / 3.2808;

  }

  public feetToInch(x: number): number {

    return x * 12;

  }

  public feetToCM(x: number): number {

    return x / 0.032808;

  }

  public feetToYard(x: number): number {

    return x * 0.33333;

  }

  public feetToKilometer(x: number): number {

    return x / 3280.8;

  }

  public feetToMile(x: number): number {

    return x * 0.00018939;

  }

  public meterToFeet(x: number): number {

    return x * 3.2808;

  }

  public meterToInch(x: number): number {

    return x * 39.370;

  }

  public meterToCM(x: number): number {

    return x / 0.01;

  }

  public meterToYard(x: number): number {

    return x * 1.0936;

  }

  public meterToKilometer(x: number): number {

    return x / 1000;

  }

  public meterToMile(x: number): number {

    return x * 0.00062137;

  }

  public inchToMeter(x: number): number {

    return x / 39.370;

  }

  public inchToFeet(x: number): number {

    return x * 0.083333;

  }

  public inchToCM(x: number): number {

    return x / 0.39370;

  }

  public inchToYard(x: number): number {

    return x * 0.027778;

  }

  public inchToKilometer(x: number): number {

    return x / 39370;

  }

  public inchToMile(x: number): number {

    return x * 0.000015783;

  }

  public cmToFeet(x: number): number {

    return x * 0.032808;

  }

  public cmToInch(x: number): number {

    return x * 0.39370;

  }

  public cmToMeter(x: number): number {

    return x / 100;

  }

  public cmToYard(x: number): number {

    return x * 0.010936;

  }

  public cmToKilometer(x: number): number {

    return x / 100000;

  }

  public cmToMile(x: number): number {

    return x * 0.0000062137;

  }

  public yardToFeet(x: number): number {

    return x * 3;

  }

  public yardToInch(x: number): number {

    return x * 36;

  }

  public yardToMeter(x: number): number {

    return x / 1.0936;

  }

  public yardToCM(x: number): number {

    return x / 0.010936;

  }

  public yardToKilometer(x: number): number {

    return x / 1093.6;

  }

  public yardToMile(x: number): number {

    return x * 0.00056818;

  }

  public kilometerToFeet(x: number): number {

    return x * 3280.8;

  }

  public kilometerToInch(x: number): number {

    return x * 39370;

  }

  public kilometerToMeter(x: number): number {

    return x * 1000;

  }

  public kilometerToYard(x: number): number {

    return x * 1093.6;

  }

  public kilometerToCM(x: number): number {

    return x * 100000;

  }

  public kilometerToMile(x: number): number {

    return x * 0.62137;

  }

  public mileToFeet(x: number): number {

    return x * 5280;

  }

  public mileToInch(x: number): number {

    return x * 63360;

  }

  public mileToMeter(x: number): number {

    return x / 0.00062137;

  }

  public mileToYard(x: number): number {

    return x * 1760;

  }

  public mileToCM(x: number): number {

    return x / 0.0000062137;

  }

  public mileToKilometer(x: number): number {

    return x / 0.62137;

  }

}
