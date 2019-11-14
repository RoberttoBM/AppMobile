import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasPage } from './notas.page';

describe('NotasPage', () => {
  let component: NotasPage;
  let fixture: ComponentFixture<NotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
