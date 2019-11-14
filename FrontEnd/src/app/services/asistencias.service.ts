import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  constructor(public http: HttpClient) { }


  getAll():Observable<any>{

    return this.http.get('http://localhost:3000/asistencias/ver');

  }

}
