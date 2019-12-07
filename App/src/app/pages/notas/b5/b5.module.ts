import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { B5Page } from './b5.page';
import { ModalEsperaPageModule } from '../../modal-espera/modal-espera.module';
import { ModalEsperaPage } from '../../modal-espera/modal-espera.page';

const routes: Routes = [
  {
    path: '',
    component: B5Page
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
  declarations: [B5Page],
  entryComponents: [ModalEsperaPage]
})
export class B5PageModule {}
