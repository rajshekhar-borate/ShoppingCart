import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]= [];

  constructor(private productService:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data:Product[])=>{
      console.log(data);
      this.products=data;
    })
  }

  updateProduct(id:number){
    this.router.navigate(['updateproduct',id]);
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(data =>{
      this.ngOnInit();
    })

  }
}
