import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carts;
  cartDetails;

  products:any=[];
  constructor(private http: HttpService) {}

  _emptyCart(id) {
    console.log(id);
    this.products = [];
    localStorage.clear();

  }
  ngOnInit(): void {

  this.products = localStorage.getItem('books'); 
  this.products = JSON.parse(this.products); 
  




  }
}