import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/IUsuario';
import { ENTITY } from '../../../environments/environment';
import { INotas } from '../../interfaces/INotas';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLocalService {

  constructor(private storage: Storage) { }


  //guardamos los datos del usuario
  async saveUser(user: Usuario){
    await this.storage.set(ENTITY.usuario, user);
  }

  //guardamos los datos del usuario
  async saveNotas(notas: INotas){
    await this.storage.set(ENTITY.usuario, notas);
  }

  //traemos los datos del estudiante para mostrarlo en el tab3 como perfil del usuario
  async getUser(){
    let user:Usuario = await this.storage.get(ENTITY.usuario);
    if(!user){
      user.NOMPER = "Problema interno";
    }
    return user;
  }

  //Traemos las notas del estudiante
  async getNotas(){
    let notas:INotas = await this.storage.get(ENTITY.notas);
    if(!notas){
      notas.NOMCUR = "Problema interno";
    }
    return notas;
  }

}
