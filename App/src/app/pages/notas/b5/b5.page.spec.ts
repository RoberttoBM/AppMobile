import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B5Page } from './b5.page';

describe('B5Page', () => {
  let component: B5Page;
  let fixture: ComponentFixture<B5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
