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
      { path: 'notas', children: [{ path: '', loadChildren: '../notas/notas.module#NotasPageModule' }] },
      { path: 'b1', children: [{ path: '', loadChildren: '../notas/b1/b1.module#B1PageModule' }] },
      { path: 'b2', children: [{ path: '', loadChildren: '../notas/b2/b2.module#B2PageModule' }] },
      { path: 'b3', children: [{ path: '', loadChildren: '../notas/b3/b3.module#B3PageModule' }] },
      { path: 'b4', children: [{ path: '', loadChildren: '../notas/b4/b4.module#B4PageModule' }] },
      { path: 'b5', children: [{ path: '', loadChildren: '../notas/b5/b5.module#B5PageModule' }] },
      { path: 'asistencias', children: [{ path: '', loadChildren: '../asistencias/asistencias.module#AsistenciasPageModule' }] },

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
