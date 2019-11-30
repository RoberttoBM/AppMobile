import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotasPage } from './notas.page';
import { ModalEsperaPageModule } from '../modal-espera/modal-espera.module';
import { ModalEsperaPage } from '../modal-espera/modal-espera.page';

const routes: Routes = [
  {
    path: '',
    component: NotasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEsperaPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotasPage],
  entryComponents: [ModalEsperaPage]
})
export class NotasPageModule {}
