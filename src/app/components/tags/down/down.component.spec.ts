/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DownComponent } from './down.component';

describe('DownComponent', () => {
  let component: DownComponent;
  let fixture: ComponentFixture<DownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
