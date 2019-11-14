import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bimestre3Page } from './bimestre3.page';

describe('Bimestre3Page', () => {
  let component: Bimestre3Page;
  let fixture: ComponentFixture<Bimestre3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bimestre3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bimestre3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
