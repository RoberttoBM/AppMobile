import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../../environments/environment';
import { Platform, LoadingController } from '@ionic/angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { tap, catchError,  } from 'rxjs/operators';
import { BehaviorSubject, Observable, from  } from 'rxjs';
import { Usuario } from '../../interfaces/IUsuario';
import { TOKEN_KEY } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loading: any;
  user = null;
  authenticationState = new BehaviorSubject(false);
  obs: Observable<any>; 


  constructor(private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private plt: Platform,
    public loadingController: LoadingController
  ) {

    this.plt.ready().then(() => {
      this.checkToken();
    });

  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando ...',
      duration: 3000
    });
    return await this.loading.present();
  }


  
 

  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  } 

  onLogin(){
    this.authenticationState.next(true);
  }

  login(credentials): Observable<Usuario> {
    return this.http.post<Usuario>(`${URL.url}/auth/login`, credentials)
      .pipe(
        tap(res => {
          this.storage.set(TOKEN_KEY, res['access_token']);
          this.user = this.helper.decodeToken(res['access_token']);
          delete res['access_token'];
          this.loading.dismiss();
        }),
        catchError(async(e) => {
          this.loading.dismiss();
          throw new Error("Error");
        })
      );
  }

  //Llamamos este metodo en el tab 3 para cerrar sesión elminando el JWT
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }


  async getToken(){
    return await this.storage.get(TOKEN_KEY);
  }

}
