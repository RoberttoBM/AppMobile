import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/IUsuario';
import { ENTITY } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLocalService {

  constructor(private storage: Storage) { }


  //guardamos los datos del usuario
  async saveUser(user: Usuario){
    await this.storage.set(ENTITY.usuario, user);
  }

  //traemos los datos del estudiante para mostrarlo en el tab3 como perfil del usuario
  async getUser(){
    let user:Usuario = await this.storage.get(ENTITY.usuario);
    if(!user){
      user.NOMPER = "Problema interno";
    }
    return user;
  }

}
