/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CleverreachComponent } from './cleverreach.component';

describe('CleverreachComponent', () => {
  let component: CleverreachComponent;
  let fixture: ComponentFixture<CleverreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleverreachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleverreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
