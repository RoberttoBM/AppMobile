import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Usuario, Notas, Asistencias, Perfil } from '../../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  //Traer al usuario logueado
  getUser(IDPER: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${URL.url}/user/notas/${IDPER}`);
  }

  //Traer notas del estudiante
  getNotas(IDPER: number): Observable<Notas[]> {
    return this.http.get<Notas[]>(`${URL.url}/notas/read/${IDPER}`);
  }

  //Traer asistencias de los estudiantes por parametros
  getAsistencias(IDPER: number): Observable<Asistencias[]> {
    return this.http.get<Asistencias[]>(`${URL.url}/asistencias/read/${IDPER}`)
  }

  //Traer datos del usuario de la vista IPERFIL de la base de datos para mostrarlos en el perfil del estudiante logueado
  getPerfil(IDPER: number): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(`${URL.url}/perfil/read/${IDPER}`)
  }

}
