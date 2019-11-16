import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/notas/notas.module').then(m => m.NotasPageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./pages/asistencias/asistencias.module').then(m => m.AsistenciasPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then(m => m.HELPPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./pages/contactos/contactos.module').then(m => m.ContactosPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then(m => m.NosotrosPageModule)
  },
  {
    path: 'bimestre1',
    loadChildren: () => import('./pages/notas/bimestres/bimestre1/bimestre1.module').then(m => m.Bimestre1PageModule)
  },
  {
    path: 'bimestre2',
    loadChildren: () => import('./pages/notas/bimestres/bimestre2/bimestre2.module').then(m => m.Bimestre2PageModule)
  },
  {
    path: 'bimestre3',
    loadChildren: () => import('./pages/notas/bimestres/bimestre3/bimestre3.module').then(m => m.Bimestre3PageModule)
  },
  {
    path: 'bimestre4',
    loadChildren: () => import('./pages/notas/bimestres/bimestre4/bimestre4.module').then(m => m.Bimestre4PageModule)
  },
  {
    path: 'bimestre5',
    loadChildren: () => import('./pages/notas/bimestres/bimestre5/bimestre5.module').then(m => m.Bimestre5PageModule)
  },
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

