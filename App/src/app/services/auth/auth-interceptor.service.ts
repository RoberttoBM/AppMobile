import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { TOKEN_KEY } from './../../../environments/environment';
import { ToastService } from '../toast.service';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    protected debug = true;

    constructor(private toastService: ToastService, private storage: Storage) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("interceptor");
        return from(this.storage.get(TOKEN_KEY)).pipe(
            switchMap(token => {
                console.log("funciona el token :D", token);
                if (token) {
                    req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
                }

                if (!req.headers.has('Content-Type')) {
                    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
                }

                return next.handle(req).pipe(
                    map((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            console.log("Entra");
                        }
                        return event;
                    }),
                    catchError((error: HttpErrorResponse) => {
                        const status = error.status;
                        const reason = error && error.message ? error.message : '';
                        if (status === 401) {
                            reason
                            this.toastService.presentToast('Usuario y/o contraseña incorrecta', 'danger');
                        }
                        return throwError(error);
                    })
                );
            }));
    }

}