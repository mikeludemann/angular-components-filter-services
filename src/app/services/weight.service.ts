import { Injectable } from '@angular/core';

@Injectable()
export class WeightService {

  constructor() { }

  public poundToKilogram(x: number): number {

    return x / 2.2046;

  }

  public poundToOunce(x: number): number {

    return x * 16;

  }

  public poundToGram(x: number): number {

    return x / 0.0022046;

  }

  public poundToStone(x: number): number {

    return x * 0.071429;

  }

  public KilogramToPound(x: number): number {

    return x * 2.2046;

  }

  public KilogramToOunce(x: number): number {

    return x * 35.274;

  }

  public KilogramToGram(x: number): number {

    return x * 1000;

  }

  public KilogramToStone(x: number): number {

    return x * 0.1574;

  }

  public OunceToPound(x: number): number {

    return x * 0.0625;

  }

  public OunceToKilogram(x: number): number {

    return x / 35.274;

  }

  public OunceToGram(x: number): number {

    return x / 0.035274;

  }

  public OunceToStone(x: number): number {

    return x * 0.0044643;

  }

  public GramToPound(x: number): number {

    return x * 0.0022046;

  }

  public GramToKilogram(x: number): number {

    return x / 1000;

  }

  public GramToOunce(x: number): number {

    return x * 0.035274;

  }

  public GramToStone(x: number): number {

    return x * 0.00015747;

  }

  public StoneToPound(x: number): number {

    return x * 14;

  }

  public StoneToKilogram(x: number): number {

    return x / 0.15747;

  }

  public StoneToOunce(x: number): number {

    return x * 224;

  }

  public StoneToGram(x: number): number {

    return x / 0.00015747;

  }

}
