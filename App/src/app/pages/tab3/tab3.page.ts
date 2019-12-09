import { Network } from '@ionic-native/network/ngx';
import { AuthService } from '../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { ModalEsperaPage } from '../modal-espera/modal-espera.page';
import { UsuarioLocalService } from '../../services/usuario/usuario-local.service';
import { Usuario, Perfil } from '../../interfaces/IUsuario';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  
Perfil: Perfil[];

  constructor(
    private usuarioLocalService: UsuarioLocalService,
    private usuarioService: UsuarioService,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private network: Network,
    private toastCtrl: ToastController, ) {


  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      color,
      message,
      duration: 1000
    });
    toast.present();
  }




  //Cerrar Sesión.
  singOut() {
    this.authService.logout();
  }

  //Este mensaje mostrará un mensaje de confirmación para cerrar sesión.
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


  async ngOnInit() {
    let user = await this.usuarioLocalService.getUser();
    this.usuarioService.getPerfil(user.IDPER).subscribe(perfil=> {
      this.Perfil = perfil;
    });
  }


  //Espera para cargar los datos
  async onModal(dato) {
    let con = this.network.type;
    console.log(con);
    if (con != this.network.Connection.NONE && con != this.network.Connection.UNKNOWN) {
      const modal = await this.modalCtrl.create({
        component: ModalEsperaPage,
        componentProps: {
          dato
        }
      });
      return await modal.present();
    }

  }



}
