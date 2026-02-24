import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!:Product[];
  constructor(private prodductService:ProductService){}
  
  ngOnInit(): void {
     this.products=this.prodductService.getProducts();  
  }

  onProductDeleted(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  } 

}
