import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { IAsistencias } from '../../interfaces/IAsistencias';
import { ENTITY } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasLocalService {

  constructor(private storage: Storage) { }



  async getAsistencias(){
    let asis:IAsistencias = await this.storage.get(ENTITY.IAsistencias);
    if(!asis){
        asis.IDPER = "Error de código :c";
    }
    return asis;
  }

}
