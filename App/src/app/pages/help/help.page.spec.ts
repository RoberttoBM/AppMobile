import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HELPPage } from './help.page';

describe('HELPPage', () => {
  let component: HELPPage;
  let fixture: ComponentFixture<HELPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HELPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HELPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
