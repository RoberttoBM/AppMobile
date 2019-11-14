import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Bimestre2Page } from './bimestre2.page';

const routes: Routes = [
  {
    path: '',
    component: Bimestre2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Bimestre2Page]
})
export class Bimestre2PageModule {}
