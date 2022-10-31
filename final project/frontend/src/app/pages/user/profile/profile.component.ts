import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  //  this.me()
  }
  me(){
    this._auth.me().subscribe(
      (res)=>{console.log(res)},
      (err)=>{
        console.log(err.error.message)
        this._router.navigateByUrl("/login")
      },
      ()=>console.log("done")
    )
  }
  file:any
  chngMyImg(event:any){
    this.file = event.target.files[0]
  }
  msg = ""
  uploadImg(){
    this.msg=""
    const myData = new FormData()
    myData.append("img", this.file, this.file.name)
    this._auth.imgUpload(myData).subscribe(
      res=> {
        console.log(res)
        console.log(this._auth.userData!.profileImage)
        this._auth.userData.profileImage = res.data.profileImage
        // this._auth.userData?.['profileImage']= res.data.profileImage
      },
      err=>{
        this.msg = "invalid image"
      },
      ()=>{

      }
    )
  }
}
