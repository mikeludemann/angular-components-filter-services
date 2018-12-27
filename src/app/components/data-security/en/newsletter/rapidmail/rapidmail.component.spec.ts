/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RapidmailComponent } from './rapidmail.component';

describe('RapidmailComponent', () => {
  let component: RapidmailComponent;
  let fixture: ComponentFixture<RapidmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
