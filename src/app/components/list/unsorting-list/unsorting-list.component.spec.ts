/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnsortingListComponent } from './unsorting-list.component';

describe('UnsortingListComponent', () => {
  let component: UnsortingListComponent;
  let fixture: ComponentFixture<UnsortingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsortingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsortingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
