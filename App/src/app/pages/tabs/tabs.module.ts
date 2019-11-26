import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'tab1', children: [{ path: '', loadChildren: '../tab1/tab1.module#Tab1PageModule' },] },
      { path: 'tab2', children: [{ path: '', loadChildren: '../tab2/tab2.module#Tab2PageModule' },] },
      { path: 'tab3', children: [{ path: '', loadChildren: '../tab3/tab3.module#Tab3PageModule' },] },
      { path: 'desarrolladores', children: [{ path: '', loadChildren: '../desarrolladores/desarrolladores.module#DesarrolladoresPageModule' }] },
      { path: 'help', children: [{ path: '', loadChildren: '../help/help.module#HELPPageModule' }] },
     // { path: 'asistencias', children: [{ path: '', loadChildren: '../asistencias/asistencias.module#AsistenciasPageModule' }] },

      { path: '**', redirectTo: '/tabs/tab1', }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
