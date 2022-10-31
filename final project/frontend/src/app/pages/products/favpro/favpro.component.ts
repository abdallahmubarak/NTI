import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-favpro',
  templateUrl: './favpro.component.html',
  styleUrls: ['./favpro.component.css']
})
export class FavproComponent implements OnInit {

  products :any[]= []
isLoaded :boolean = false
 
  constructor(private data: ProductsService) { }

  ngOnInit(): void {this.fav()
  }
  fav(){
    this.data.allfav().subscribe(
      res=> {
        this.products = res.data; 
      },
      err=>console.log(err),
      ()=>{}
    )}


}
