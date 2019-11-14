import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Bimestre4Page } from './bimestre4.page';

const routes: Routes = [
  {
    path: '',
    component: Bimestre4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Bimestre4Page]
})
export class Bimestre4PageModule {}
