import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart_count:any=0;
  products:any=[];
  constructor() { }

  ngOnInit(): void {

    this.products = localStorage.getItem('books'); 
    this.products = JSON.parse(this.products); 

    this.cart_count = this.products.length;

  }
}
