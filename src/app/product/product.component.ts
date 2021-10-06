import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[]= [];
  public filterCategory : any;

  constructor(private productService:ProductService,
    private router:Router, private cartService : CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data:Product[])=>{
      console.log(data);
      this.products=data;
      this.filterCategory = data;
      this.products.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }

  productdetails(id:number){
    this.router.navigate(['productdetails',id]);
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.products
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
