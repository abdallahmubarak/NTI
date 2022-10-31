import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg = ""
  isSubmitted=false
  loginForm = new FormGroup({
    email:new FormControl("abdallah@gmail.com", [Validators.required]),
    password:new FormControl("abdallah@#55", [Validators.required])
      //, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
  })
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }
  get name(){return this.loginForm.get("name")}
  get age(){return this.loginForm.get("age")}
  get email(){return this.loginForm.get("email")}
  get password(){return this.loginForm.get("password")}
  
  handleLogin(){
    this.isSubmitted=true
    if(this.loginForm.valid){
      this._auth.login(this.loginForm.value).subscribe(
        res=>{
          console.log(res)
          localStorage.setItem("onlineShopping", res.data.token)
          this._auth.isLoggedIn = true
          this._auth.userData = res.data.userData
        },
        e=>{
          console.log(e)
          this.errorMsg=e.error.message
          this._auth.isLoggedIn = false
          this._auth.userData = null
        },
        ()=>{
          console.log("finished")
          // this._router.navigate(['/login'])
          this._router.navigateByUrl('/')
        }
      )
    }
  }

}
