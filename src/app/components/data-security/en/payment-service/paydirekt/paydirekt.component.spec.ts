/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaydirektComponent } from './paydirekt.component';

describe('PaydirektComponent', () => {
  let component: PaydirektComponent;
  let fixture: ComponentFixture<PaydirektComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaydirektComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaydirektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
