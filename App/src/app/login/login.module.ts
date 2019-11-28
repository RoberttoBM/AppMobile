import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { ModalEsperaPageModule } from '../pages/modal-espera/modal-espera.module';
import { ModalEsperaPage } from '../pages/modal-espera/modal-espera.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModalEsperaPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage],
  entryComponents:[ModalEsperaPage]
})
export class LoginPageModule {}
