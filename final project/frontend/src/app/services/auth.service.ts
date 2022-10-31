import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  MyProfile() {
    throw new Error('Method not implemented.');
  }
  private commonURL = "http://localhost:3000/api/"
  public isLoggedIn = false
  public userData:any = null
  constructor(private _http:HttpClient) { }
  register(data:User):Observable<any>{
    return this._http.post(`${this.commonURL}user/register`, data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.commonURL}user/login`, data)
  }
  me():Observable<any>{
    return this._http.get(`${this.commonURL}user/me`)
  }
  imgUpload(data:any):Observable<any>{
    return this._http.post("http://localhost:3000/api/user/addimage", data)
  }
}
