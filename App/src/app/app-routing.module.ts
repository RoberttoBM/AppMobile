import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate: [AuthGuardService] },
  //{ path: 'asistencias', loadChildren: './pages/asistencias/asistencias.module#AsistenciasPageModule' },
  { path: 'desarrolladores', loadChildren: './pages/desarrolladores/desarrolladores.module#DesarrolladoresPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HELPPageModule' },

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
