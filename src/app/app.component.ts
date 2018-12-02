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
  array = [{ a: 1 }, { a: 2 }];
  users = [
    { id: 1, name: { first: 'foo', last: 'bar' } },
    { id: 2, name: { first: 'baz', last: 'bar' } },
    { id: 3, name: { first: 'bar', last: 'bar' } },
    { id: 4, name: { first: 'lol', last: 'bar' } }
  ];
  test = [3,3,3]
  list = [{ id: 3, test: "actual" }, { id: 2, test: "old" }, { id: 1, test: "old" }, { id: 4, test: "old" }];

  sum: number = 0;

  constructor(calculate: CalculateService) {
    this.sum = calculate.sum(1, 2, 3, 4, 5)
  }
}
