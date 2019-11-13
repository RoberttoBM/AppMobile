import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Help } from '../pages/intefaces/IHelp';


@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(public http: HttpClient) { }

  url = environment.url_api_rest

  getAll(): Observable<any> {

    return this.http.get(`${this.url}/help/read`);
  }

  saveConsulta(help: Help) {
    console.log(help);
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line: deprecation
      this.http.post<Help>('http://localhost:3000/help/create', help).subscribe(res => {
        resolve(res);
      });
    });
  }

}
