/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoscriptComponent } from './noscript.component';

describe('NoscriptComponent', () => {
  let component: NoscriptComponent;
  let fixture: ComponentFixture<NoscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
