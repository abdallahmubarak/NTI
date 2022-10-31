import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMsg = ""
  isSubmitted=false
  registerForm = new FormGroup({
    name:new FormControl("marwa", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    age:new FormControl("", [Validators.required]),
    email:new FormControl("", [Validators.required, Validators.email]),
    password:new FormControl("", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
  })
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }
  get name(){return this.registerForm.get("name")}
  get age(){return this.registerForm.get("age")}
  get email(){return this.registerForm.get("email")}
  get password(){return this.registerForm.get("password")}
  
  handleRegister(){
    // console.log(this.registerForm.value)
    this.isSubmitted=true
    if(this.registerForm.valid){
      this._auth.register(this.registerForm.value).subscribe(
        res=>{
          console.log(res)
        },
        e=>{
          console.log(e)
          this.errorMsg=e.error.message
        },
        ()=>{
          console.log("finished")
          // this._router.navigate(['/login'])
          this._router.navigateByUrl('/login')
        }
      )
    }
  }
}
