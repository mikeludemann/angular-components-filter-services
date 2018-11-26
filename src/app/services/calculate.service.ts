import { Injectable } from '@angular/core';

@Injectable()
export class CalculateService {

  constructor() { }

  public sum(...params: number[]): number {
    let result = 0;
    for (let input of params) {
      result += input;
    }
    return result;
  }

}
