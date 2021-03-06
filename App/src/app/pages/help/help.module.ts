import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';
import { IonicModule } from '@ionic/angular';

import { HELPPage } from './help.page';

const routes: Routes = [
  {
    path: '',
    component: HELPPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomFormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HELPPage]
})
export class HELPPageModule {}
