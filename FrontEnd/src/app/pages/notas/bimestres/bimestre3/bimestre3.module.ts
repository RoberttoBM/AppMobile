import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Bimestre3Page } from './bimestre3.page';

const routes: Routes = [
  {
    path: '',
    component: Bimestre3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Bimestre3Page]
})
export class Bimestre3PageModule {}
