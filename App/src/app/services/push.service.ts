import { Injectable } from "@angular/core";
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { ToastService } from './toast.service';

import { ONESIGNAL} from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PushService{

    constructor(
        private oneSignal: OneSignal,
        private toastService: ToastService){}

  setupPush() {
    this.oneSignal.startInit(ONESIGNAL.APP_ID, ONESIGNAL.ANDROID_ID);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      console.log(msg);
      this.toastService.presentToast(JSON.stringify(data), "success")
    });

    this.oneSignal.handleNotificationOpened().subscribe(data => {
      let additionalData = data.notification.payload.additionalData;
      this.toastService.presentToast(JSON.stringify(additionalData), "success")
    });

    this.oneSignal.endInit();
    this.oneSignal.getIds().then((id) => {
      console.log(id);
     // this.toastService.presentToast(JSON.stringify(id), "success")
    });
  }

}