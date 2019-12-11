import { Component, OnInit } from '@angular/core';
import { UsuarioLocalService } from '../../services/usuario/usuario-local.service';
import { Network } from '@ionic-native/network/ngx';
import { ModalController, AlertController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Asistencias } from '../../interfaces/IUsuario';
import { ModalEsperaPage } from '../modal-espera/modal-espera.page';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  Asistencias: Asistencias[] = []

  constructor(
    private usuarioLocalService: UsuarioLocalService,
    private network: Network,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private usuarioService: UsuarioService) {

  }

  async ngOnInit() {
    let user = await this.usuarioLocalService.getUser();
    this.usuarioService.getAsistencias(user.IDPER).subscribe(asistencias => {
      this.Asistencias = asistencias;
      console.log(this.Asistencias);
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

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Si el(la) estudiante asiste tarde o no cumple con los reglamentos al llegar a la Institución se considerará como una Asistencia Inadecuada',
      buttons: ['OK']
    });
    await alert.present();
  }

}
