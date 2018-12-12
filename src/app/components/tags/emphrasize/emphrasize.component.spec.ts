/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmphrasizeComponent } from './emphrasize.component';

describe('EmphrasizeComponent', () => {
  let component: EmphrasizeComponent;
  let fixture: ComponentFixture<EmphrasizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmphrasizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmphrasizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
