import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

  constructor() { }

  public hexadecimal(hex: string): string {
    return hex.toString();
  }


  public decrement(x: number, index: number): number {

    if (index == null || index == 0) {

      index = 1;

    }

    return x - index;

  }

  public increment(x: number, index: number): number {

    if (index == null || index == 0) {

      index = 1;

    }

    return x + index;

  }

  public add(x: number, y: number): number {

    if (x == null || x == 0) {

      x = 0;

    }

    if (y == null || y == 0) {

      y = 0;

    }

    return x + y;

  }

  public subtract(x: number, y: number): number {

    if (x == null || x == 0) {

      x = 0;

    }

    if (y == null || y == 0) {

      y = 0;

    }

    return x - y;

  }

  public multiply(x: number, y: number): number {

    if (x == null || x == 0) {

      x = 0;

    }

    if (y == null || y == 0) {

      y = 0;

    }

    return x * y;

  }

  public divide(x: number, y: number): number {

    if (x == null || x == 0) {

      x = 0;

    }

    if (y == null || y == 0) {

      y = 0;

    }

    return x / y;

  }

  public modulo(x: number, y: number): number {

    if (x == null || x == 0) {

      x = 0;

    }

    if (y == null || y == 0) {

      y = 0;

    }

    if (y == 0) {

      return 0;

    }

    return x % y;

  }

}
