import { Component, OnInit } from '@angular/core';
import { UsuarioLocalService } from '../../../services/usuario/usuario-local.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { Usuario } from '../../../interfaces/IUsuario';
import { ModalEsperaPage } from '../../modal-espera/modal-espera.page';

@Component({
  selector: 'app-b2',
  templateUrl: './b2.page.html',
  styleUrls: ['./b2.page.scss'],
})
export class B2Page implements OnInit {


  Usuario: Usuario = { IDPER: 0, NOMPER: "", APEPER: "", DNIPER: "", USUPER: "", CONTRPER: "", GRAAUL: "", SECAUL: "", NOMCUR: "", BIMESTRE1: 0, BIMESTRE2: 0, BIMESTRE3: 0, BIMESTRE4: 0, BIMESTRE5: 0 }


  constructor(
    private usuarioLocalService: UsuarioLocalService,
    private modalCtrl: ModalController,
    private network: Network,
    private toastCtrl: ToastController, ) {

    this.usuarioLocalService.getUser().then(resp => {
      this.Usuario = resp;
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