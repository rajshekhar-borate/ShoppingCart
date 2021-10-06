import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { User } from './user-details/User';
import { Order } from './order/Order';

export class login {
  username!: string;
  password!: string;
}

export class loginExistingUser {
  username!: string;
  password!: string;
}

export class loginNewUser {
  username!: string;
  password!: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://localhost:8081/product"

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8081/product/all");
  }

  signUp(data:any){
    return this.http.post("http://localhost:8082/api/signup",data);
  }

  signIn(data:any){
    return this.http.post("http://localhost:8082/api/signin",data);
  }

  addProduct(product:Product):Observable<object>{
    return this.http.post("http://localhost:8081/product",product);
  }

  getProductsbyId(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  updateProduct(id:number, product:Product):Observable<object>{
    return this.http.put(`${this.url}/${id}`,product);
  }

  deleteProduct(id:number):Observable<object>{
    return this.http.delete(`${this.url}/${id}`);
  }

  getUserDetails():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8089/allusers");
  }

  saveResto(data:any)
   {
      return this.http.post<login[]>('http://localhost:8088/auth',data)
   }

   ExistingUser(data:any)
   {
      return this.http.post<loginExistingUser[]>('http://localhost:8089/auth',data)
   }
   NewUser(data:any)
   {
      return this.http.post<loginNewUser[]>('http://localhost:8089/subs',data)
   }

   PlaceOrder(oder:Order):Observable<object>{
    return this.http.post("http://localhost:8084/order/create",oder);
  }

  allOrders():Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:8084/order/all");
  }

}
