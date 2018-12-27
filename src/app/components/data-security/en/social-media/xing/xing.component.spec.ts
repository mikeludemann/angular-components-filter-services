/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XingComponent } from './xing.component';

describe('XingComponent', () => {
  let component: XingComponent;
  let fixture: ComponentFixture<XingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
