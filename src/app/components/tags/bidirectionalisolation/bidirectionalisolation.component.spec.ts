/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BidirectionalisolationComponent } from './bidirectionalisolation.component';

describe('BidirectionalisolationComponent', () => {
  let component: BidirectionalisolationComponent;
  let fixture: ComponentFixture<BidirectionalisolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidirectionalisolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidirectionalisolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
