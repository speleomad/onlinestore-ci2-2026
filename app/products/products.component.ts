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
    errMess!: string;
    isWaiting: boolean = true;
  
    constructor(private productService: ProductService,
                private router: Router) { }
    ngOnInit(): void {
      /*this.products = this.productService.getProducts();*/
      this.productService.getProducts().subscribe({
       /*  next:(products)=>{this.products=products} */
        next: (products) => {
          this.products = products;
          this.isWaiting = false;
        },
        error: (errmess) => {
          this.products = [];
          this.errMess = errmess;
          this.isWaiting = false;
        },
        complete: () => { console.log("Complete"); }
      });
    }
     onProductDeleted(id: number) {
      this.products = this.products.filter(product => product.id !== id);
    } 
  
  onAddProduct(){
   this.router.navigateByUrl("/products/edit/-1")
  }
}
