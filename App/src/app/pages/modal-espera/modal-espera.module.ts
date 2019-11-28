import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalEsperaPage } from './modal-espera.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEsperaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ModalEsperaPage]
})
export class ModalEsperaPageModule {}
