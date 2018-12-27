/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoogleAdwordsConversionTrackingComponent } from './google-adwords-conversion-tracking.component';

describe('GoogleAdwordsConversionTrackingComponent', () => {
  let component: GoogleAdwordsConversionTrackingComponent;
  let fixture: ComponentFixture<GoogleAdwordsConversionTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleAdwordsConversionTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAdwordsConversionTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
