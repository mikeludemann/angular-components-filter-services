import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureService {

  constructor() { }

  public celsiusToFahrenheit(x: number): number {

    return (x - 32) / 1.8;

  }

  public fahrenheitToCelsius(x: number): number {

    return (x * 1.8) + 32;

  }

}
