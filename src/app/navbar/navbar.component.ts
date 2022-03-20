import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  disableNav:any;



  constructor( private _AuthenticationService : AuthenticationService , private _Router:Router) { }

  ngOnInit(): void {

      this._AuthenticationService.islogin.subscribe({
        next:(value)=>
        {
          this.disableNav = value;
        }
      })
  }

  loOut()
  {
    this._AuthenticationService.islogin.next(false);
    this._Router.navigate(["/login"])
    localStorage.removeItem('checklogin')


  }

}
