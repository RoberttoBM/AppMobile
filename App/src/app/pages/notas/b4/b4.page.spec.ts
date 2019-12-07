import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B4Page } from './b4.page';

describe('B4Page', () => {
  let component: B4Page;
  let fixture: ComponentFixture<B4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
