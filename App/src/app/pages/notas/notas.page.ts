import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { ModalController, LoadingController } from '@ionic/angular';
import { UsuarioLocalService } from '../../services/usuario/usuario-local.service';
import { ModalEsperaPage } from '../modal-espera/modal-espera.page';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Notas } from '../../interfaces/IUsuario';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  Notas: Notas[] = [];

  constructor(
    private usuarioLocalService: UsuarioLocalService,
    private network: Network,
    private modalCtrl: ModalController,
    private usuarioService: UsuarioService,
    public loadingController: LoadingController

  ) {



  }


   ngOnInit() {
/*     let user = await this.usuarioLocalService.getUser();
    this.usuarioService.getNotas(user.IDPER).subscribe(notas=> {
      this.Notas = notas;
      console.log(this.Notas);
    }); */
  }


/*   // Espera para cargar los datos
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

  } */


}


