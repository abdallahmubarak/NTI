import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-addprodct',
  templateUrl: './addprodct.component.html',
  styleUrls: ['./addprodct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private data:ProductsService , private router: Router) { }

  ngOnInit(): void {}

  add_product_from = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
   price: new FormControl('',[Validators.required]),
   quantity: new FormControl('',[Validators.required,Validators.minLength(3)]),
   description: new FormControl('',[Validators.required,Validators.minLength(3)]),
   image: new FormControl('')
 });

 get name() {return this.add_product_from.get('name');}
 get price() {return this.add_product_from.get('price');}
 get quantity() {return this.add_product_from.get('quantity');}
 get description() {return this.add_product_from.get('description');}
 get image() {return this.add_product_from.get('image');}

 AddProduct(add_product_from:FormGroup){
   this.data.add_prodcut(this.add_product_from.value).subscribe(
     res=>alert("Product Added sucessfully"),
     err=>console.log(err),
     ()=>{this.router.navigate(['/']);}
   )}


}
