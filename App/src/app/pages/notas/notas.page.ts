import { Component, OnInit } from '@angular/core';
import { INotas } from '../../interfaces/INotas';
import { Network } from '@ionic-native/network/ngx';
import { ModalController } from '@ionic/angular';
import { UsuarioLocalService } from '../../services/usuario/usuario-local.service';
import { ModalEsperaPage } from '../modal-espera/modal-espera.page';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  Notas: INotas = {IDPER: 0, NOMCUR: "", BIMESTRE1: 0, BIMESTRE2: 0, BIMESTRE3: 0, BIMESTRE4: 0,BIMESTRE5: 0 } 

  constructor(
    private usuarioLocalService: UsuarioLocalService,
    private network: Network,
    private modalCtrl: ModalController,

  ) {
      
    this.usuarioLocalService.getNotas().then(resp => {
      this.Notas = resp;
    });

  }

  ngOnInit() {
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
