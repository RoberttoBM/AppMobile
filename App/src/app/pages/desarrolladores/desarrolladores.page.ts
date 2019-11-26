import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-desarrolladores',
  templateUrl: './desarrolladores.page.html',
  styleUrls: ['./desarrolladores.page.scss'],
})
export class DesarrolladoresPage implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Roberto Borjas Martínez',
      subHeader: 'roberto.borjas@vallegrande.edu.pe',
      message: '+51 998 482 995',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Arian Sánchez Nolazco',
      subHeader: 'arian.sanchez@vallegrande.edu.pe',
      message: '+51 991 349 383',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'James Casas Chacaliaza',
      subHeader: 'james.casas@vallegrande.edu.pe',
      message: '+51 963 204 251',
      buttons: ['OK']
    });
    await alert.present();
  }




  ngOnInit() {
  }

}
