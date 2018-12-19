/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasefontComponent } from './basefont.component';

describe('BasefontComponent', () => {
  let component: BasefontComponent;
  let fixture: ComponentFixture<BasefontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasefontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasefontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
