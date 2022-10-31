import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-singlepro',
  templateUrl: './singlepro.component.html',
  styleUrls: ['./singlepro.component.css']
})
export class SingleproComponent implements OnInit {

 
  products:any[] = [];
  constructor(private data:ProductsService , private userdata:AuthService, private  _activated:ActivatedRoute , private router:Router) { }
  id:any= this._activated.snapshot.paramMap.get('id'); 
  obj:any = {};
checkOtpValueFlag = false;
  CheckOtp=new FormGroup({
    otp: new FormControl('',[Validators.required]),
  })

  delete_product(id:any){
    this.data.delete_product(id).subscribe(
      res=> { console.log(res); alert('product deleted successfully'); },
        err=>console.log(err),
       ()=>{ this.router.navigate(['/']);}
    )}

    addcomment(id:any)
    {
      this.data.add_comment(this.id).subscribe(
        res=> {   alert(res.message); },
          err=>console.log(err),
          ()=>{ this.router.navigate(['/']);}
      )
    }

    list_single_product(){
    this.data.list_single_product(this.id).subscribe(
      res=> {
        this.obj = res.data; 
        console.log("test"+ this.products)
      },
      err=>console.log(err),
       ()=>{}
    )}

   ngOnInit(): void {this.list_single_product()  }
 }

