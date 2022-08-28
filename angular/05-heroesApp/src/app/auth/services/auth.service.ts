import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import {map,tap} from 'rxjs/operators';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  _baseUrl : string = environment.baseUrl; 
  private _auth    : Auth | undefined;

  get auth():Auth{
    return {...this._auth!}
  }

  constructor(
    private http: HttpClient
  ) { }
  
  verificaAutentificacion(): Observable<boolean>{
    
    if(!localStorage.getItem('token')){
      return of(false);
    }
    return this.http.get<Auth>
      (`${this._baseUrl}/usuarios/1`)
      .pipe(
        map( auth => {
          //console.log('map', auth);
          this._auth = auth
          return true;
        })
      )
    ;
  }

  login(){
    return this.http.get<Auth>(`${this._baseUrl}/usuarios/1`)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => localStorage.setItem('token',auth.id)),
      )
    ;
  }

  logout(){
    this._auth = undefined;
  }

}
