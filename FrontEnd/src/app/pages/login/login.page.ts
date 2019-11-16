import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NotasService } from 'src/app/services/notas.service';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { cuenta } from './interfaces/ILogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public servicio: NotasService,
    public router: Router,
    private loadingCtrl: LoadingController,
    public alertController: AlertController,


  ) {
    this.loginForm = this.formBuilder.group({
      Contraseña: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
      ])),

      Usuario: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8),
      ]))
    });

  }
  get formControls() { return this.loginForm.controls; }

  login() {
    const usr = this.formControls.Usuario.value;
    const pwd = this.formControls.Contraseña.value
    this.servicio.login(usr, pwd).subscribe((resp) => {
      console.log(resp);
      if (resp !== null) {
        this.presentLoading();
        console.log(":)");
        this.router.navigateByUrl('/tabs/tab1');
      } else {
        console.log(":(");
        this.presentAlert();
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      subHeader: "Usuario y/o contraseña incorrecto",
      message: "Intente de nuevo por favor ...",
      buttons: ["OK"]
    });

    await alert.present();
  }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({

      message: 'Cargando Información...',
      duration: 3000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }


  public validarAcceso(form: { value: cuenta }) {
    this.presentLoading();
    this.servicio
      .login(form.value.usuario, form.value.contraseña)
      .subscribe(resp => {
        if (resp != null) {
          console.log(resp);
          this.router.navigateByUrl("/tab1");
        } else {
          console.log(":D");
          this.presentAlert();
        }
      });
  }
}