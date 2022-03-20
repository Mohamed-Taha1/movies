import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private _AuthenticationService:AuthenticationService , private _Router:Router) { }
  registerForm:FormGroup= new FormGroup({
    first_name: new FormControl(null,[Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),


    ]),
    last_name: new FormControl(null,[Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),


    ]),
    age : new FormControl(null,[Validators.required,
      Validators.min(10),
      Validators.max(80),

    ]),
    email : new FormControl(null,[Validators.required,
      Validators.email
    ]),
    password : new FormControl(null,[Validators.required,

    ]),
  })
  errorMessage:string="";
  obValue:any;
   registe (formInfo:FormGroup) {

    this._AuthenticationService.register(formInfo.value).subscribe(
      (response)=>
      {
        if(response.message== "success")
        {
          this._Router.navigate(["/login"])
        }
        else
        {
          this.errorMessage="this Email is Alredy Register"
        }
      }
      ,
      (error)=>
      {

      }
      )

  }
  ngOnInit(): void {
  }

}
