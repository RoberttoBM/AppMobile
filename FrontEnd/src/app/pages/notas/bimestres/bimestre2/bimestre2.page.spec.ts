import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bimestre2Page } from './bimestre2.page';

describe('Bimestre2Page', () => {
  let component: Bimestre2Page;
  let fixture: ComponentFixture<Bimestre2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bimestre2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bimestre2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
