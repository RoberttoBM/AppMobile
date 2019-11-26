import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { ToastService } from './toast.service';
@Injectable({
  providedIn: 'root'
})
export class ConectionStatusService {

  constructor(private network: Network,
    private toastService: ToastService) { }

  isConection():boolean {
    console.log(this.network.type);
    if (this.network.type == this.network.Connection.NONE) {
      this.toastService.presentToast("Sin conexión", "danger");
      return false;
    }
    return true;
  }

  subs() {
    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      setTimeout(() => {
        if (this.network.type === this.network.Connection.WIFI) {
          console.log('we got a wifi connection, woohoo!');
          this.toastService.presentToast("Conectado WIFI", "success");
        }
      }, 3000);
    });

    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.toastService.presentToast("Desconectado", "danger");
    });
  }

}
