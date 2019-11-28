import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab3Page } from './tab3.page';
import { ModalEsperaPageModule } from '../modal-espera/modal-espera.module';
import { ModalEsperaPage } from '../modal-espera/modal-espera.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page
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
  declarations: [Tab3Page],
  entryComponents: [ModalEsperaPage]
})
export class Tab3PageModule {}
