import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../interfaces/IUsuario';
import { ModalController } from '@ionic/angular';
import { ToastService } from '../../services/toast.service';
import { UsuarioLocalService } from '../../services/usuario/usuario-local.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-modal-espera',
  templateUrl: './modal-espera.page.html',
  styleUrls: ['./modal-espera.page.scss'],
})
export class ModalEsperaPage implements OnInit {

  @Input() dato: string;

  constructor(
    public toastService: ToastService,
    private modalEsperaCtrl: ModalController,



  ) { }

  ngOnInit() {
    switch (this.dato) {
      case 'sync':
        this.sync();
        break;
    }
  }

  async sync() {
    this.toastService.presentToast1("","");
    this.salir();

  }

  async salir() {
    setTimeout(async () => {
      await this.modalEsperaCtrl.dismiss();
    }, 4500)
  }

}




