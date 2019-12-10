import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../interfaces/IUsuario';
import { ModalController } from '@ionic/angular';
import { ToastService } from '../../services/toast.service';
import { UsuarioLocalService } from '../../services/usuario/usuario-local.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-espera',
  templateUrl: './modal-espera.page.html',
  styleUrls: ['./modal-espera.page.scss'],
})
export class ModalEsperaPage implements OnInit {

  @Input() dato: string;
  private user: Usuario;

  constructor(
    public toastService: ToastService,
    private modalEsperaCtrl: ModalController,
    private authService: AuthService,
    private usuarioLocalService: UsuarioLocalService


  ) { }

  ngOnInit() {
    switch (this.dato) {
      case 'sync':
        this.sync();
        break;
    }
  }

  async sync() {
    this.user = await this.usuarioLocalService.getUser();
    const token = await this.authService.getToken();
    this.toastService.presentToast1("","");
    this.salir();

  }

  async salir() {
    setTimeout(async () => {
      await this.modalEsperaCtrl.dismiss();
    }, 4500)
  }

}




