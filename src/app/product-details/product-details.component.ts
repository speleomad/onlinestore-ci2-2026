import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
 @Input() product!:Product
 @Output() productDeleted: EventEmitter<number> = new EventEmitter<number>();
  constructor(private productService:ProductService){ }


  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
    this.productDeleted.emit(id);
      
  }
}
