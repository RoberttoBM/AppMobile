import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Help } from '../interfaces/IHelp';
import { URL } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(public http: HttpClient) { }

  saveConsulta(help: Help) {
    console.log(help);
    return new Promise((resolve, reject) => {
      this.http.post<Help>(`${URL.url}/help/create`, help).subscribe(res => {
        resolve(res);
      });
    });
  }


}
