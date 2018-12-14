/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RubytermComponent } from './rubyterm.component';

describe('RubytermComponent', () => {
  let component: RubytermComponent;
  let fixture: ComponentFixture<RubytermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubytermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubytermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
