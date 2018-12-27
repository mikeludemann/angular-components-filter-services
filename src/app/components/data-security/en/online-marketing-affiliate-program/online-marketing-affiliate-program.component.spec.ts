/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnlineMarketingAffiliateProgramComponent } from './online-marketing-affiliate-program.component';

describe('OnlineMarketingAffiliateProgramComponent', () => {
  let component: OnlineMarketingAffiliateProgramComponent;
  let fixture: ComponentFixture<OnlineMarketingAffiliateProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineMarketingAffiliateProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineMarketingAffiliateProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
