import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { User } from './User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users: User[]= [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getUserDetails().subscribe((data:User[])=>{
      console.log(data);
      this.users=data;
    })
  }

 

}
