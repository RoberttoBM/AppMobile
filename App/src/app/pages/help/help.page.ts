import { Component, OnInit } from '@angular/core';
import { HelpService } from 'src/app/services/help.service';
import { Help } from '../intefaces/IHelp';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HELPPage implements OnInit {


  HELP: Help = new Help();

  constructor(
    private helpService: HelpService,
    private loadingCtrl: LoadingController,
    ) { }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando Información ... ',
      duration: 3000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddteamPage');
  }

  guardarConsulta() {
    console.log(this.HELP);
    this.helpService.saveConsulta(this.HELP).then((result) => {
      console.log(result);
      this.presentLoading;
    });
  }


}
