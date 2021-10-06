import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  x: any;

  adminlog=new FormGroup(
    {
        username: new FormControl(''),
        password: new FormControl(''),
        
    })
    constructor(private productService:ProductService, private router:Router) { }
  
    ngOnInit(): void {
    }
    validate()
    {
      //console.warn(this.addResto.value)
      this.productService.saveResto(this.adminlog.value).subscribe((result: any)=>{
      console.warn("result",result)    
        this.x=result
        console.warn(this.x.response)
        if(this.x.response=="no"){
          
          (<any>this.router).navigate(["/adminlogin"])  
          alert("enter valid credentials");
        }
        else
        {
          (<any>this.router).navigate(["/Admin"]) 
          
                
        }
    })
    }
}