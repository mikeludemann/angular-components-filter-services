/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FramesetComponent } from './frameset.component';

describe('FramesetComponent', () => {
  let component: FramesetComponent;
  let fixture: ComponentFixture<FramesetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramesetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
