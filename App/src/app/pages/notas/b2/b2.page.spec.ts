import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2Page } from './b2.page';

describe('B2Page', () => {
  let component: B2Page;
  let fixture: ComponentFixture<B2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
