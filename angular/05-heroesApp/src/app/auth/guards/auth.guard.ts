import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable ,of, tap} from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  
  constructor(
    private authService: AuthService,
    private router     : Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean {
    
    return this.authService.verificaAutentificacion()
      .pipe(
        tap( estaAutenticado => {
          if(!estaAutenticado) {
            this.router.navigate(["./auth/login"])
          }
          }
        )
      )
    ;

    /*if(this.authService.auth.id){
      return true;
    }

    console.log('Bloqueadi por el AuthGuard - CanActivate');

    return false; */    
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean > | Promise<boolean> | boolean  {
    
    return this.authService.verificaAutentificacion()
      .pipe(
        tap( estaAutenticado => {
            if(!estaAutenticado) {
              this.router.navigate(["./auth/login"])
            }
          }
        )
      )
    ;
      /*console.log('canLoad', true);
      console.log(route);
      console.log(segments);*/

    /*if(this.authService.auth.id){
      return true;
    }

    console.log('Bloqueadi por el AuthGuard - CanLoad');

    return false;*/
  }
}
