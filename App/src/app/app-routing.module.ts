import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate: [AuthGuardService] },
  { path: 'desarrolladores', loadChildren: './pages/desarrolladores/desarrolladores.module#DesarrolladoresPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HELPPageModule' },   
  { path: 'notas', loadChildren: './pages/notas/notas.module#NotasPageModule' },
  { path: 'b1', loadChildren: './pages/notas/b1/b1.module#B1PageModule' },
  { path: 'b2', loadChildren: './pages/notas/b2/b2.module#B2PageModule' },
  { path: 'b3', loadChildren: './pages/notas/b3/b3.module#B3PageModule' },
  { path: 'b4', loadChildren: './pages/notas/b4/b4.module#B4PageModule' },
  { path: 'b5', loadChildren: './pages/notas/b5/b5.module#B5PageModule' },
  { path: 'asistencias', loadChildren: './pages/asistencias/asistencias.module#AsistenciasPageModule' },

    

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
