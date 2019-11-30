import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  //Traer al usuario logueado
  getUser(IDPER: string): Observable<any> {
    return this.http.get(`${URL.url}/user/read/${IDPER}`);
  }

  //Traer notas del estudiante
  getNotas(IDPER: string): Observable<any> {
    return this.http.get(`${URL.url}/notas/read/${IDPER}`);
  }

  //Traer asistencias de los estudiantes por parametros
  getAsistencias(IDPER: string): Observable<any> {
    return this.http.get(`${URL.url}/asistencias/traer/${IDPER}`)
  }

}
