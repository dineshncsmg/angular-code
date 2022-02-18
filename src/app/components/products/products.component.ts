import { Component, OnInit,} from '@angular/core';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Array<object> = [];
  products:any=[];
  result:any=[];
  constructor(private http: HttpService) {}

  _getProducts(): void {
    this.http.getAllProducts().subscribe((data: any) => {
      this.product = data.data;
      console.log(this.product);
    });
  }
  addItemToCart( prodId,qnt,title,img,amt,auth): void {
    let payload = {
      prodId,qnt,title,img,amt,auth
    };

   this.products = localStorage.getItem('books'); 
  this.products = JSON.parse(this.products); 

    var testObject = [{
      prodId:prodId,
      title:title,
      img: img ,
      amt: amt,
      auth:auth,
      qnt:qnt
   }];

   for (const key in this.products) {
      
      console.log(this.products[key]);

      if(this.products[key].prodId == prodId){
      }else{
       
      } 
      
   }

    localStorage.setItem('books', JSON.stringify(testObject));
 
  }
  ngOnInit(): void {
    this._getProducts();
  }
 

  productList = [
    {
       prodId:1,
       title:"Ponniyin Selvan",
       img: "http://localhost:4200//src/assets/images/book-1.jpg" ,
       amt: "650",
       auth:"Kalki",
       qnt:1
    },
    {
      prodId:2,
      title:"Kuruthi Punal",
      img: "http://localhost:4200//src/assets/images/book-2.png" ,
      amt: "550",
      auth:"Indra Parthsarathy",
      qnt:1
   },
   {
    prodId:3,
    title:"Kalki",
    img: "http://localhost:4200//src/assets/images/book-3.png" ,
    amt: "700",
    auth:"Kevin Missal",
    qnt:1
  },
    {
    prodId:4,
    title:"Theerkdharisi",
    img: "http://localhost:4200//src/assets/images/book-4.png" ,
    amt: "800",
    auth:"Kaleel Gibran",
    qnt:1
    }
  ];


  productList_1 = [
    {
      prodId:5,
      title:"Worl Greatest Classics",
      img: "http://localhost:4200//src/assets/images/book-5.png" ,
      amt: "600",
      auth:"Oscar Wild",
      qnt:1
    },
    {
      prodId:6,
      title:"Who Will Carry",
      img: "http://localhost:4200//src/assets/images/book-6.png" ,
      amt: "850",
      auth:"Robin Sharma",
      qnt:1
      },
    {
      prodId:7,
      title:"You Can",
      img: "http://localhost:4200//src/assets/images/book-7.png" ,
      amt: "900",
      auth:"George Matthew Adams",
      qnt:1
      },
    {
      prodId:8,
      title:"Fluffy & Me",
      img: "http://localhost:4200//src/assets/images/book-8.png" ,
      amt: "800",
      auth:"Anitha Krishan",
      qnt:1
      }
  ];

}