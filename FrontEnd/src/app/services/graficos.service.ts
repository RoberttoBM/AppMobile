import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor(private http:HttpClient) { }

  getPromedio():Observable<any>{
    return this.http.get('http://localhost:3000/graficos/promedio');
  }

}
 