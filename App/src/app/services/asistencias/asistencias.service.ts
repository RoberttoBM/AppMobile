import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  constructor(private http:HttpClient) { }


  //Traer asistencias de los estudiantes por parametros
  getAsistencias(IDPER:string): Observable<any> {
    return this.http.get(`${URL.url}/asistencias/traer/${IDPER}`)
  } 

}
