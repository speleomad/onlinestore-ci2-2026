import { Component, Input } from '@angular/core';
import { Product } from '../shared/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
@Input() product!:Product;
}

