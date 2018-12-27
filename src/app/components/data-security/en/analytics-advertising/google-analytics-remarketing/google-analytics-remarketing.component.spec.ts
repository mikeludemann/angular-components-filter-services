/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoogleAnalyticsRemarketingComponent } from './google-analytics-remarketing.component';

describe('GoogleAnalyticsRemarketingComponent', () => {
  let component: GoogleAnalyticsRemarketingComponent;
  let fixture: ComponentFixture<GoogleAnalyticsRemarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleAnalyticsRemarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAnalyticsRemarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
