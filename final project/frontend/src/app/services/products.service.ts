import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private commonURL = "http://localhost:3000/api/"
  constructor(private http:HttpClient) { }
  
  
  //addprodcut(Data: any): Observable<any> {return this.http.post(`${this.commonURL}addproduct`, Data)}
  allproducts(): Observable<any> {return this.http.get(`${this.commonURL}allproducts/:page`)}
  allfav(): Observable<any> {return this.http.get(`${this.commonURL}favlist`)}
  list_single_product(id: any): Observable<any> {return this.http.get(`${this.commonURL}product/${id}`)}
 // edit_product(id:any,Data: any): Observable<any> {return this.http.patch(`${this.commonURL}edit_product/${id}`,Data)}
  delete_product(id:any): Observable<any> {return this.http.delete(`${this.commonURL}productdel/${id}`)}
 GetMyProduct(id:string): Observable<any> {return this.http.get(`${this.commonURL}product/${id}`)}
  add_comment(id:any): Observable<any> {return this.http.delete(`${this.commonURL}add_comment/${id}`)}
}
