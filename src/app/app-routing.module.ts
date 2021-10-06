import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminCrudComponent } from './admin-crud/admin-crud.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CartComponent } from './cart/cart.component';
import { ExistinguserComponent } from './existinguser/existinguser.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component'; 
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { component:ProductComponent,path:'productlist'},
  { component:SignUpComponent,path:'SignUp'},
  { component:SignInComponent,path:'SignIn'},
  { component:AdminCrudComponent, path:'Admin'},
  { component:ProductListComponent,path:'product-list'},
  { component:AddProductComponent, path:'addproduct'},
  { component:UpdateProductComponent,path:'updateproduct/:id'},
  { component:UserDetailsComponent,path:'userdetails'},
  { component:ProductDetailsComponent,path:'productdetails/:id'},
  { component:CartComponent,path:'cart'},
  { component:OrderComponent,path:'order'},
  { component:AdminloginComponent,path:'adminlogin'},
  { component:ExistinguserComponent,path:'existing'},
  { component:NewuserComponent,path:'register'},
  { component:OrderDetailsComponent,path:'orderdetails'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
