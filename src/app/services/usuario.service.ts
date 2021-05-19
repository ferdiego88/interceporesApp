import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

   getUsuarios(){

     let params = new HttpParams().append('page', '2');
     params = params.append('nombre', 'Fernando Santillan');

     const headers = new HttpHeaders({
       'token-usuario': 'ABC5452169303'
     });

     return this.http.get('https://ressqres.in/api/user', {
       params,
       headers
     }).pipe(
       map( resp => resp['data']),
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
