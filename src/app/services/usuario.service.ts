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



     return this.http.get('https://reqres123.in/api/user', {
       params
     }).pipe(
       map( resp => resp['data']),
      //  catchError(this.manejarError)
     );
  }



}
