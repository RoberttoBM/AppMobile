import { ToastService } from './../services/toast.service';
import { UsuarioLocalService } from '../services/usuario/usuario-local.service';
import { AuthService } from '../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalEsperaPage } from '../pages/modal-espera/modal-espera.page';
import { UsuarioService } from '../services/usuario/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuario: string;
  public password: string;


  constructor(
    private userLocalService: UsuarioLocalService,
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private toastService: ToastService,
    private modalCtrl: ModalController,
    public alertController: AlertController,

  ) { }

  ngOnInit() {
  }

  async onModal(dato) {
    const modal = await this.modalCtrl.create({
      component: ModalEsperaPage,
      componentProps: {
        dato
      }
    });
    return modal;
  }

  ionViewWillEnter() {
    console.log("Ingresar Usuario y Contraseña");
    this.usuario = "";
    this.password = "";
  }


  async signIn() {

    let credentials = {
      username: this.usuario,
      password: this.password
    }
    console.log(credentials);
    try {
      await this.authService.presentLoading();
      this.authService.login(credentials).subscribe(async (res: any) => {
        await this.userLocalService.saveNotas(res);
        await this.userLocalService.saveUser(res);
        console.log(res);
        let mod = await this.onModal("sync");
        await mod.present();
        this.authService.onLogin();
      }, (err) => {
        console.log(err);
        this.toastService.presentToast("Usuario y/o contraseña incorrectos", "danger");
      });
    } catch (error) {
      console.log("Error");
      console.log(error);
    }

  }

  logout() {
    this.authService.logout();
  }

}

