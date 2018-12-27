/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KlarnaComponent } from './klarna.component';

describe('KlarnaComponent', () => {
  let component: KlarnaComponent;
  let fixture: ComponentFixture<KlarnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlarnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlarnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
