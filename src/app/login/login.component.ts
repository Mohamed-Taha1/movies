import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private _AuthenticationService:AuthenticationService, private _Router:Router) { }
  loginFrom:FormGroup= new FormGroup(
    {email:new FormControl(null,[Validators.required , Validators.email]),

      password: new FormControl(null,[Validators.required])
    }

    )

  ngOnInit(): void {
  }

  errMesage:string="";

  login(obj:any)
  {
    this._AuthenticationService.login(obj.value).subscribe(
      (response)=>
      {
        if(response.message=="success")
        {
          this._Router.navigate(["/home"]);
          this._AuthenticationService.islogin.next(true);
          localStorage.setItem('checklogin','true');
          
        }
        else
        {
            this.errMesage=" Email or password wrong."
        }

      },
      (error)=>
      {
        console.log(error);
      }
    )
  }





}
