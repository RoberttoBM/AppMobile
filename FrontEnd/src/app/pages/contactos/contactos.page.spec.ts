import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosPage } from './contactos.page';

describe('ContactosPage', () => {
  let component: ContactosPage;
  let fixture: ComponentFixture<ContactosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
