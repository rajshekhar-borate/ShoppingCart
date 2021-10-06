import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Register } from '../sign-up/register';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  register= new Register();
 

  constructor(
    private productService:ProductService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  submit(){
    this.productService.signIn(this.register).subscribe(res => {
      console.log(res);
      window.alert('welcome'+this.register.username)
      this.gotoProductList();
    })
  }

  gotoProductList() {
    this.router.navigate(['productlist']);
   }

}


