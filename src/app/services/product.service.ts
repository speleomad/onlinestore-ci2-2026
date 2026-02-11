import { Injectable } from '@angular/core';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[
    { "id": 1,"code": "SS-S9","name": "Samsung Galaxy S9","price": 500.0,"quantity": 50,"image": "../../assets/images/samsung-s9.png"},
    { "id": 2,"code": "NK-5P","name": "Nokia 5.1 Plus","price": 60.0,"quantity": 60},
    { "id": 3,"code": "IP-7","name": "iPhone 7","price": 600.0,"quantity": 30,"image": "../../assets/images/iphone-7.png"},
    { "id": 4,"code": "XI-14","name": "Redmi 14","price": 1200.0,"quantity": 50,"image": "../../assets/images/xiaomi-14.png"}
];
  constructor() { }

  getProducts():Product[]{
    return this.products;
  }


}
