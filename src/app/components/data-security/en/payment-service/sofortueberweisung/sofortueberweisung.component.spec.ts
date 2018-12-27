/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SofortueberweisungComponent } from './sofortueberweisung.component';

describe('SofortueberweisungComponent', () => {
  let component: SofortueberweisungComponent;
  let fixture: ComponentFixture<SofortueberweisungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofortueberweisungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofortueberweisungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
