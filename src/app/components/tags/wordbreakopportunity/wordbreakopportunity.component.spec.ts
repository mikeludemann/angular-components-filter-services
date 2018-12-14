/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WordbreakopportunityComponent } from './wordbreakopportunity.component';

describe('WordbreakopportunityComponent', () => {
  let component: WordbreakopportunityComponent;
  let fixture: ComponentFixture<WordbreakopportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordbreakopportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordbreakopportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
