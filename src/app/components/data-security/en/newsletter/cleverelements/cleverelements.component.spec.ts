/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CleverelementsComponent } from './cleverelements.component';

describe('CleverelementsComponent', () => {
  let component: CleverelementsComponent;
  let fixture: ComponentFixture<CleverelementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleverelementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleverelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
