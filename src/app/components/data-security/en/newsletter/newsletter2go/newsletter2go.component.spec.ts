/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Newsletter2goComponent } from './newsletter2go.component';

describe('Newsletter2goComponent', () => {
  let component: Newsletter2goComponent;
  let fixture: ComponentFixture<Newsletter2goComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newsletter2goComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newsletter2goComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
