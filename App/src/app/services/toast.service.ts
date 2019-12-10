import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) { }


  //Mensaje cuando el usuario ingrese una contraseña o usuario incorrecto, lo consumimos en el login 
  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      color,
      animated:true,
      header: 'Usuario y/o contraseña incorrectos',
      message: 'Intente nuevamente por favor...',
      duration: 3000,
    });
    toast.present();
  }


  //Mensaje en el modal de espera despúes del login
  async presentToast1(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      color:'primary' ,
      position: 'bottom',
      header: 'Cargando datos del estudiante',
      message: 'Espere un momento por favor... ',
      duration: 4000
    });
   toast.present();
  }
}
