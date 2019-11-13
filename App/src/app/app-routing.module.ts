import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'notas', loadChildren: './pages/notas/notas.module#NotasPageModule'},
  { path: 'asistencias', loadChildren: './pages/asistencias/asistencias.module#AsistenciasPageModule' },
  { path: 'contactos', loadChildren: './pages/contactos/contactos.module#ContactosPageModule' },
  { path: 'nosotros', loadChildren: './pages/nosotros/nosotros.module#NosotrosPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' }, 
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HELPPageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

