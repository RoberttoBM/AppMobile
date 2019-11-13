import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotasPageModule } from './pages/notas/notas.module';
import { AsistenciasPageModule } from './pages/asistencias/asistencias.module';
import { LoginPageModule } from './pages/login/login.module';
import { HELPPageModule } from './pages/help/help.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [LoginPageModule, NotasPageModule, HELPPageModule, AsistenciasPageModule, BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
