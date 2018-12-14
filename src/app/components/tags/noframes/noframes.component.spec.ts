/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoframesComponent } from './noframes.component';

describe('NoframesComponent', () => {
  let component: NoframesComponent;
  let fixture: ComponentFixture<NoframesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoframesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoframesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
