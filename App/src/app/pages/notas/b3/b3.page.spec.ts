import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B3Page } from './b3.page';

describe('B3Page', () => {
  let component: B3Page;
  let fixture: ComponentFixture<B3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
