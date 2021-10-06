import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  x: any;
  x1:any;

  adminlog=new FormGroup(
    {
        username: new FormControl(''),
        password: new FormControl(''),
        
    })

  constructor(private productService: ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  validate()
  {
    //console.warn(this.addResto.value)
    this.productService.ExistingUser(this.adminlog.value).subscribe((result1: any)=>{
      console.warn("result",result1)    
        this.x1=result1
    })
        if(this.x1.response=="no"){ 
    this.productService.NewUser(this.adminlog.value).subscribe((result: any)=>{
    console.warn("result",result)    
      this.x=result
      console.warn(this.x.response)
      
        if(this.x.response=="Successful"){

          alert("successfully registered");
        
          (<any>this.router).navigate(["/productlist"]) 
         
                
        }
       /*else{
          alert("existing user");
          (<any>this.router).navigate(["/productlist"]) 
        } */
      
  })
}
else{
  alert("existing user");
  (<any>this.router).navigate(["/productlist"]) 

}
  }

}
