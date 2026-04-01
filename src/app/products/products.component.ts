import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService,
              private router:Router
  ) { }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  onProductDeleted(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  } 
  onAddProduct(){
   this.router.navigateByUrl("/products/edit")
  }
}
