import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=PRODUCTS;/* [
    { "id": 1,"code": "SS-S9","name": "Samsung Galaxy S9","price": 500.0,"quantity": 50,"image": "../../assets/images/samsung-s9.png"},
    { "id": 2,"code": "NK-5P","name": "Nokia 5.1 Plus","price": 60.0,"quantity": 60},
    { "id": 3,"code": "IP-7","name": "iPhone 7","price": 600.0,"quantity": 30,"image": "../../assets/images/iphone-7.png"},
    { "id": 4,"code": "XI-14","name": "Redmi 14","price": 1200.0,"quantity": 50,"image": "../../assets/images/xiaomi-14.png"}
]; */
  constructor() { }

  getProducts():Product[]{
    return this.products;
  }
      //Méthode pour supprimer un produit de la liste des produits
   deleteProduct(id: number): void {
    const index = this.products.findIndex(product => product.id == id)
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  } 
    //Méthode pour ajouter un nouveu produit
   addProduct(product: Product) {
    product.id = this.products[this.products.length - 1].id + 1;
    this.products.push(product);
  } 


}
