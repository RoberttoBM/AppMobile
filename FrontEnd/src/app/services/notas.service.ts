import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(public http: HttpClient) { }

  url = environment.url_api_rest

  getAll():Observable<any>{

    // return this.http.get('http://localhost:3000/notas/read/1');
    return this.http.get(`${this.url}/notas/read`);
  }
  
  login(usr, pwd): Observable<any> {
    return this.http.get(`${this.url}/login/${usr}/${pwd}`);
  }
  

}
