import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Bimestre5Page } from './bimestre5.page';

const routes: Routes = [
  {
    path: '',
    component: Bimestre5Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Bimestre5Page]
})
export class Bimestre5PageModule {}
