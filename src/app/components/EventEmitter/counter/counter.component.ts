import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

	@Input() count: number = 0;

	@Output() change: EventEmitter<number> = new EventEmitter<number>();

	increment() {
		this.count++;
		this.change.emit(this.count);
	}

	decrement() {
		this.count--;
		this.change.emit(this.count);
	}

	constructor() { }

	ngOnInit() {
	}

}
