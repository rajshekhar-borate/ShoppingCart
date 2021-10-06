import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id!: number;

  product:Product= new Product();

  constructor(private productService:ProductService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productService.getProductsbyId(this.id).subscribe(data =>{
      this.product=data;
    })
  }

  submit(){
    this.productService.updateProduct(this.id,this.product).subscribe(data => {
      this.gotoProductList();
    })

  }

  gotoProductList() {
    this.router.navigate(['Admin']);
   }

}
