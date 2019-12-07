import { Component, OnInit } from '@angular/core';
import { Notas } from '../../../interfaces/IUsuario';
import { UsuarioLocalService } from '../../../services/usuario/usuario-local.service';
import { Network } from '@ionic-native/network/ngx';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { ModalController } from '@ionic/angular';
import { ModalEsperaPage } from '../../modal-espera/modal-espera.page';

@Component({
  selector: 'app-b2',
  templateUrl: './b2.page.html',
  styleUrls: ['./b2.page.scss'],
})
export class B2Page implements OnInit {

  Notas: Notas[] = [] 

  constructor(
    private usuarioLocalService: UsuarioLocalService,
    private network: Network,
    private modalCtrl: ModalController,
    private usuarioService: UsuarioService

  ) {



  }

  async ngOnInit() {
    let user = await this.usuarioLocalService.getUser();
    //console.log('usuario notas', user)
    this.usuarioService.getNotas(user.IDPER).subscribe(notas=> {
      this.Notas = notas;
      console.log(this.Notas);
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
