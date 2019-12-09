import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Usuario, Notas, Asistencias, Perfil } from '../../interfaces/IUsuario';
import { ENTITY } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLocalService {

  constructor(private storage: Storage) { }

  //Metodos para guardar los datos

  //guardamos los datos del usuario
  async saveUser(user: Usuario) {
    console.log('saveUser', user)
    return this.storage.set(ENTITY.usuario, user);
  }

  //guardamos los asistencias del usuario
  async saveNotas(notas: Notas[]) {
    console.log(notas);
    return this.storage.set(ENTITY.notas, notas);

  }

  //guardamos las asistencias del usuario
  async saveAsistencias(asistencias: Asistencias[]) {
    console.log(asistencias);
    return this.storage.set(ENTITY.asistencias, asistencias);

  }

  //Guardamos datos del perfil
  async savePerfil(perfil: Perfil[]){
    console.log(perfil);
    return this.storage.set(ENTITY.perfil, perfil);
  }


  //Metodos para obtener los datos

  //traemos los datos del estudiante para mostrarlo en el tab3 como perfil del usuario
  async getUser(): Promise<Usuario> {
    return this.storage.get(ENTITY.usuario);
  }

  //Traemos las notas del estudiante
  async getNotas() {
    let notas: Notas = await this.storage.get(ENTITY.notas);
    if (!notas) {
      notas.NOMCUR = "Problema interno con las notas";
    }
    return notas;
  }


  //Traemos las asistencias del estudiante
  async getAsistencias() {
    let asistencias: Asistencias = await this.storage.get(ENTITY.asistencias);
    if (!asistencias) {
      asistencias.ASISTENCIAS = "Problema interno con las asistencias"
    }
  }

  //Traemos los datos para la vista del perfil
  async getPerfil() {
    let perfil: Perfil = await this.storage.get(ENTITY.perfil);
    if (!perfil) {
      perfil.NOMPER = "Problema internos con el perfil"
    }
  }
}
