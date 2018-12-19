/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FontawesomeComponent } from './fontawesome.component';

describe('FontawesomeComponent', () => {
  let component: FontawesomeComponent;
  let fixture: ComponentFixture<FontawesomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontawesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontawesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
