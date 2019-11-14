import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bimestre1Page } from './bimestre1.page';

describe('Bimestre1Page', () => {
  let component: Bimestre1Page;
  let fixture: ComponentFixture<Bimestre1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bimestre1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bimestre1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
