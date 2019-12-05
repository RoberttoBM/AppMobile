import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Usuario, Notas } from '../../interfaces/IUsuario';

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
  getAsistencias(IDPER: string): Observable<any> {
    return this.http.get(`${URL.url}/asistencias/traer/${IDPER}`)
  }

}
