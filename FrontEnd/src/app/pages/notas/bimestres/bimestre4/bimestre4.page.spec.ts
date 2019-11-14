import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bimestre4Page } from './bimestre4.page';

describe('Bimestre4Page', () => {
  let component: Bimestre4Page;
  let fixture: ComponentFixture<Bimestre4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bimestre4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bimestre4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
