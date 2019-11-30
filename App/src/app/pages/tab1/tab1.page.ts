import { Component, OnInit } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  subscription;
  constructor(
    private platform: Platform,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("Entra :D");
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }


 /*  //Mensaje de bienvenido :D
  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      color: 'success',
      message: 'Bienvendido... 😊',
      duration: 2000
    });
    toast.present();
  } */






}
