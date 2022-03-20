import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  islogin =new BehaviorSubject(false);

  constructor(private _HttpClient:HttpClient , private _Router:Router)

  {
    if(localStorage.getItem('checklogin')!=null)
    {
      this.islogin.next(true);
      _Router.navigate(['/home']);

    }
    else
    {
      this.islogin.next(false);
      _Router.navigate(['/login']);
    }
  }


  register(obj:any):Observable<any>
  {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup",obj)
  }
  login(obj:any) : Observable<any>
  {

    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin",obj)
  }
}
