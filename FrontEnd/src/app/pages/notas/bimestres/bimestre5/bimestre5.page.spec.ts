import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bimestre5Page } from './bimestre5.page';

describe('Bimestre5Page', () => {
  let component: Bimestre5Page;
  let fixture: ComponentFixture<Bimestre5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bimestre5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bimestre5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
