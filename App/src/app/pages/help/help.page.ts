/* import { Component, OnInit } from '@angular/core';
import { HelpService } from '../../';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class HelpPage implements OnInit {

  HELP: Help = new Help();

  constructor(private helpService: HelpService) { }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddteamPage');
  }

  guardarEmpresa() {
    console.log(this.HELP);
    this.helpService.saveEmpresa(this.HELP).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }


}
 */