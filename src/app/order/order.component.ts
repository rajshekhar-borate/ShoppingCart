import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../Service/cart.service';
import { Order } from './Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  strikeCheckout:any = null;

  public grandTotal !: number;

  order= new Order();

  constructor(private productService:ProductService,private router:Router,private cartService : CartService) { }

  ngOnInit(): void {
    this.stripePaymentGateway();
    this.grandTotal = this.cartService.getTotalPrice();
  }

  submit(){
    this.productService.PlaceOrder(this.order).subscribe(data=>{
      console.log(data);
      
    })
  }

  checkout(amount: number) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Jh4SsSDNi2K7BEpjhNMK5BtBRSaWkmACdITieWRcze5aU9i2Q6MKkBGusaZEwVLZ9Y1NI9KMwKbojHeT0ACD73T00SsiWq07e',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        
        alert('Stripe token generated!');
       
      }
    });
  
    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
  }
  
  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Jh4SsSDNi2K7BEpjhNMK5BtBRSaWkmACdITieWRcze5aU9i2Q6MKkBGusaZEwVLZ9Y1NI9KMwKbojHeT0ACD73T00SsiWq07e',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
             
          }
         
        });
      }
        
      window.document.body.appendChild(scr);
    }
  }

 


}
