import { Component, OnInit } from '@angular/core';
import { HelpService } from 'src/app/services/help.service';
import { Help } from '../../interfaces/IHelp';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HELPPage implements OnInit {

  Formulario: FormGroup;
  numero: any = /^[0-9]+/;

  HELP: Help = new Help();

  constructor(
    private helpService: HelpService,
    private loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
  ) {
    this.Formulario = this.formBuilder.group({
      CONSULTA: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(500),
      ])),

      DNIPER: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(this.numero),
        Validators.minLength(8),
        Validators.maxLength(8),
      ]))
    });

  }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Enviando Consulta ... ',
      duration: 3000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      subHeader: "Consulta enviada...",
      buttons: ["OK"]
    });
    await alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddteamPage');
  }

  guardarConsulta() {
    console.log(this.HELP);
    this.helpService.saveConsulta(this.HELP).then((result) => {
      console.log(result);
      if (result == null) {
        this.presentLoading();
        console.log(":)");
        this.presentAlert();
      }

    });
    this.HELP = new Help();
  }



}



