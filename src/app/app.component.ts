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
  array = [ {a: 1}, {a: 2} ];
  array2 = [ 1,2,3,4 ];
  object = {1:{a:3},2:{a:4}};
  test = "1,2,3,4"
  list = [{id:3,test:"actual"},{id:2,test:"old"},{id:1,test:"old"},{id:4,test:"old"}];

  sum: number = 0;

  constructor(calculate:CalculateService){
    this.sum = calculate.sum(1,2,3,4,5)
  }
}
