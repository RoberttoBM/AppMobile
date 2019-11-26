import { ToastService } from './../services/toast.service';
import { UsuarioLocalService } from '../services/usuario/usuario-local.service';
import { AuthService } from '../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ConectionStatusService } from '../services/conection-status.service';
import { AlertController } from '@ionic/angular';
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
    private conectionService: ConectionStatusService,
    private toastService: ToastService,
    public alertController: AlertController,

  ) { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    console.log("Ingresar Usuario y Contraseña");
    this.usuario = "";
    this.password = "";
  }


  async signIn() {

    if (!this.conectionService.isConection()) {
      return;
    }

    let credentials = {
      username: this.usuario,
      password: this.password
    }
    console.log(credentials);
    try {
      await this.authService.presentLoading();
      this.authService.login(credentials).subscribe(async (res: any) => {
        await this.userLocalService.saveUser(res);
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



//Para cerrar sesión :D
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: '¡Mensaje de confirmación!',
      subHeader: '¿Desea cerrar sesión?',
      message: '¿Desea cerrar sesión?',
      buttons: ['Cancelar', 'Sí']
    });
    await alert.present();
  }

}

