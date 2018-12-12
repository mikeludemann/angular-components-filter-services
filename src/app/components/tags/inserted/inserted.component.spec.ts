/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InsertedComponent } from './inserted.component';

describe('InsertedComponent', () => {
  let component: InsertedComponent;
  let fixture: ComponentFixture<InsertedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
