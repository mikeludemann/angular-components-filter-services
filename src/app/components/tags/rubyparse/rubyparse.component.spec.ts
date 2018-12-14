/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RubyparseComponent } from './rubyparse.component';

describe('RubyparseComponent', () => {
  let component: RubyparseComponent;
  let fixture: ComponentFixture<RubyparseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubyparseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubyparseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
