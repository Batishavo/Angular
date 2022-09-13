import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/auth.interfaces';
import { map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(){
    console.log(this._usuario);
    return {...this._usuario};
  }
  
  constructor(private http: HttpClient) {}

  login( email : string, password : string){
    const url  = `${this.baseUrl}/auth`;
    const body = {email, password};
    return this.http.post<AuthResponse>(url,body)
    .pipe(
      tap(resp =>{
        if(resp.ok){
          localStorage.setItem('token',resp.token!);
        }
      }),
      map( response => response.ok),
      catchError(err => of(err.error.msg))
    );
  }

  validarToken():Observable<boolean>{

    const url = `${this.baseUrl}/auth/renew`;
    
    const header= localStorage.getItem('token') || '';

    return this.http.get<AuthResponse>(`${url}?xToken=${header}`)
      .pipe(
        map(resp=>{

          localStorage.setItem('token',resp.token!);
          this._usuario = {
            name:resp.name!,
            uid: resp.uid!,
            correo: resp.email!,
          }

          return resp.ok;
        }),
        catchError(err => of(false))
      )
    ;
  }

  logOut(){
    localStorage.removeItem('token');
  }

  registro(name:string,email:string,password:string){

    const url = `${this.baseUrl}/auth/new`;
    const body = {name:name,email:email,password:password};
    return this.http.post<AuthResponse>(url,body)
      .pipe(
        tap(({ok,token}) =>{
          if(ok){
            localStorage.setItem('token',token!);
          }
        }),
        map( response => response.ok),
        catchError(err => of(err.error.msg))
      )
    ;
  }

}

