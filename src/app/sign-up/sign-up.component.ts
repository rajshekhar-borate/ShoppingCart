import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Register } from './register';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  

  register= new Register();

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  submit(){
    this.productService.signUp(this.register).subscribe(res => {
      console.log(res);
    })
  }


 
}
