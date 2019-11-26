import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) { }


  //Mensaje cuando el usuario ingrese una contraseña o usuario incorrecto 
  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      color,
      header: 'Usuario y/o contraseña incorrectos',
      message: 'Intente nuevamente por favor...',
      duration: 3000
    });
    toast.present();
  }
}
