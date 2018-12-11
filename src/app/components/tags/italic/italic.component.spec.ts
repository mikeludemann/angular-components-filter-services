/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItalicComponent } from './italic.component';

describe('ItalicComponent', () => {
  let component: ItalicComponent;
  let fixture: ComponentFixture<ItalicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
