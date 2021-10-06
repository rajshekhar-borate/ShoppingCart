import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-existinguser',
  templateUrl: './existinguser.component.html',
  styleUrls: ['./existinguser.component.css']
})
export class ExistinguserComponent implements OnInit {

  x: any;

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
      this.productService.ExistingUser(this.adminlog.value).subscribe((result: any)=>{
      console.warn("result",result)    
        this.x=result
        console.warn(this.x.response)
        if(this.x.response=="no"){
          
          (<any>this.router).navigate(["/existing"])  
          alert("enter valid credentials");
        }
        else
        {
          (<any>this.router).navigate(["/order"]) 
          
                
        }
    })
  }

}
