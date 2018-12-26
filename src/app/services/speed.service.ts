import { Injectable } from '@angular/core';

@Injectable()
export class SpeedService {

  constructor() { }

  public mphToKPH(x: number): number {

    return x * 1.609344;

  }

  public mphToKnots(x: number): number {

    return x / 1.150779;

  }

  public mphToMach(x: number): number {

    return x / 761.207;

  }

  public kphToMPH(x: number): number {

    return x / 1.609344;

  }

  public kphToKnots(x: number): number {

    return x / 1.852;

  }

  public kphToMach(x: number): number {

    return x / 1225.044;

  }

  public knotsToMPH(x: number): number {

    return x * 1.150779;

  }

  public knotsToKPH(x: number): number {

    return x * 1.852;

  }

  public knotsToMach(x: number): number {

    return x / 661.4708;

  }

  public machToMPH(x: number): number {

    return x * 761.207;

  }

  public machToKPH(x: number): number {

    return x * 1225.044;

  }

  public machToKnots(x: number): number {

    return x * 661.4708;

  }

}
