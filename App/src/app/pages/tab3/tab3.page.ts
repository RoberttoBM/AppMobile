import { Network } from '@ionic-native/network/ngx';
import { AuthService } from '../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  loading: any;

  constructor(
    private alertController: AlertController,
    private authService: AuthService,
    private network: Network,
    private toastCtrl: ToastController, ) {

    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.presentToast("Desconectado", "danger");

    });

    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
          this.presentToast("Conectado", "success");
        }
      }, 3000);
    });
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      color,
      message,
      duration: 1000
    });
    toast.present();
  }

  ngOnInit() { }


  singOut() {
    this.authService.logout();
  }

  


  async showConfirmAlert() {
    const alert = await this.alertController.create({
      header: 'Advertencia:',
      subHeader: '¿Deses cerrar sesión?',
      buttons: [

        {
          text: 'Sí',
          handler: () => {
            this.authService.logout();
          }
        },

        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Mantiene la sesión abierta');
          }
        }
       
      ]
    });
    await alert.present();
  }

}
