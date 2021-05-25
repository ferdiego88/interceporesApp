import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'token-usuario': 'ABC5452169303'
    });
    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone)
      .pipe(
        catchError(this.manejarError)
      );
  }

  manejarError(error: HttpErrorResponse){
    console.log('Sucedió un Error');
    console.log('Registrado en Log File');
    console.log(error);
    return throwError('Error Personalizado');
  }
}
