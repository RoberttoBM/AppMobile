import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AsistenciasPage } from './asistencias.page';
import { ModalEsperaPage } from '../modal-espera/modal-espera.page';
import { ModalEsperaPageModule } from '../modal-espera/modal-espera.module';

const routes: Routes = [
  {
    path: '',
    component: AsistenciasPage
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
  declarations: [AsistenciasPage],
  entryComponents: [ModalEsperaPage]
})
export class AsistenciasPageModule {}
