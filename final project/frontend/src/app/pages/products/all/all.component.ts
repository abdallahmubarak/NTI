import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
products :any[]= []
isLoaded :boolean = false
  constructor(private data: ProductsService) { }
  ngOnInit(): void { this.all()  }

  all(){
    this.data.allproducts().subscribe(
      res=> {
        this.products = res.data; 
      },
      err=>console.log(err),
      ()=>{}
    )}
}
