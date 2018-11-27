import { Component } from '@angular/core';
import { CalculateService } from './services/calculate.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Environment for Components, Filter and Services';
  name = "hello test";
  array = [1,2,3,4,7,8,9];
  object = {a:3,b:2};
  test = "1,2,3,4"

  sum: number = 0;

  constructor(calculate:CalculateService){
    this.sum = calculate.sum(1,2,3,4,5)
  }
}
