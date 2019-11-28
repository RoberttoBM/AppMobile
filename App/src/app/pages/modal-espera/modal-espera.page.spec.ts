import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEsperaPage } from './modal-espera.page';

describe('ModalEsperaPage', () => {
  let component: ModalEsperaPage;
  let fixture: ComponentFixture<ModalEsperaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEsperaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEsperaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
