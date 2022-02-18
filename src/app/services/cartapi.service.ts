import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
   cartDataList:any =[];
   productList = new BehaviorSubject<any>([]);

   constructor(private http:HttpClient) { }
   
   getProductData(){
     return this.productList.asObservable();
   }

  //  remove cart data one by one
   removeCartData(product:any){
     this.cartDataList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartDataList.splice(index,1)
      } 
   }) 
  }

}
