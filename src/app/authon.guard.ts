import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';



@Injectable({
  providedIn: 'root'
})
export class AuthonGuard implements CanActivate {

  constructor( private _AuthenticationService:AuthenticationService, private _Router:Router)
  {}

  canActivate():boolean
  {
    if(this._AuthenticationService.islogin.getValue()==true)
    {

      return true;
    }
    else
    {
      this._Router.navigate(['/login'])
      return false ;
    }

  }



}
