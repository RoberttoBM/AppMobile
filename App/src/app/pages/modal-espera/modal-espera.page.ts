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
    private modalEsperaCtrl: ModalController,
    public toastService: ToastService,
    private router: Router,
    private authService: AuthService,
    private usuarioLocalService: UsuarioLocalService

  ) { }


  //Al iniciar el modal de espera llevamos a cabo la acción de guardar los datos de logueo local
  ngOnInit() {
    switch (this.dato) {
      case 'sync':
        this.sync();
        break;
    }
  }

  //Una ves logueado guardamos al usuario local y el token
  async sync() {
    //this.user = await this.usuarioLocalService.getUser();
    //const token = await this.authService.getToken();
    this.toastService.presentToast1("", "");
    this.salir();

  }

  //Despues de guardarlo los datos, salimos del gif de espera con un tiempo asignado
  async salir() {
    setTimeout(async () => {
      await this.modalEsperaCtrl.dismiss();
    }, 4500)
  }

}




