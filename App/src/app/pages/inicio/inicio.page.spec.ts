import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { inicioPage } from './inicio.page';

describe('inicioPage', () => {
  let component: inicioPage;
  let fixture: ComponentFixture<inicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [inicioPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(inicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
