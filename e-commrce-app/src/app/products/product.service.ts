import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import {Product} from "./product"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody):Observable<Product>{
      const  baseUrl ="http://localhost:3000/product";
      return this.httpClient.post<Product>(baseUrl,productBody)
  }
  viewProduct(productID):Observable<Product>{
    const  baseUrl ="http://localhost:3000/product/"+productID;
    return this.httpClient.get<Product>(baseUrl)
  }
  updateProduct(productID,productBody):Observable<Product>{
    const  baseUrl ="http://localhost:3000/product/"+productID;
    return this.httpClient.put<Product>(baseUrl,productBody)
  }
  deleteProduct(productID):Observable<Product>{
    const  baseUrl ="http://localhost:3000/product/"+productID;
    return this.httpClient.delete<Product>(baseUrl)
  }
  searchCategoryProduct(categoryID):Observable<Product>{
    const  baseUrl ="http://localhost:3000/product/category="+categoryID;
    return this.httpClient.get<Product>(baseUrl)
  }
  searchDateProduct(dateParam):Observable<Product>{
    const  baseUrl ="http://localhost:3000/product/date="+dateParam;
    return this.httpClient.get<Product>(baseUrl)
  }
  getCategory():Observable<Category>{
    const  categoryUrl ="http://localhost:3000/categories";
    return this.httpClient.get<Category>(categoryUrl)
  }
}
