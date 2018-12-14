/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartinglineComponent } from './partingline.component';

describe('PartinglineComponent', () => {
  let component: PartinglineComponent;
  let fixture: ComponentFixture<PartinglineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartinglineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartinglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
