/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KlickTippComponent } from './klick-tipp.component';

describe('KlickTippComponent', () => {
  let component: KlickTippComponent;
  let fixture: ComponentFixture<KlickTippComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlickTippComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlickTippComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
