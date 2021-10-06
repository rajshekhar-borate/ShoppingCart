import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order/Order';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orders:Order[]=[];

  constructor(private productService:ProductService,
    private router:Router) { }

  ngOnInit(): void {

    this.productService.allOrders().subscribe((data:Order[])=>{
      console.log(data);
      this.orders=data;
    })
  }

}
