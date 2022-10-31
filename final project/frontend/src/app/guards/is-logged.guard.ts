import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {
  constructor(private _auth:AuthService, private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      // console.log(this._auth.isLoggedIn)
      if(localStorage.getItem("g23")){
        // alert("you are logged in")
        this._router.navigateByUrl("/")
        return false
      }
    return true;
  }
  
}
