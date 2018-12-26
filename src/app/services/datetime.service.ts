import { Injectable } from '@angular/core';

@Injectable()
export class DatetimeService {

  constructor() { }

  public year(): any {

    return new Date().getFullYear();

  }

  public month(): any {

    return new Date().getMonth() + 1;

  }

  public monthAtString(): any {

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return months[new Date().getMonth()];

  }

  public day(): any {

    return new Date().getDate();

  }

  public dayAtString(): any {

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[new Date().getDay()];

  }

  public hour(): any {

    return new Date().getHours();

  }

  public minute(): any {

    return new Date().getMinutes();

  }

  public second(): any {

    return new Date().getSeconds();

  }

  public millisecond(): any {

    return new Date().getMilliseconds();

  }

}
