import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product= new Product();

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.productService.addProduct(this.product).subscribe(data=>{
      console.log(data);
      this.gotoProductList();
    })
  }
  gotoProductList() {
   this.router.navigate(['Admin']);
  }
   
  submit(){
    console.log(this.product);
    this.saveProduct();
  }
}
