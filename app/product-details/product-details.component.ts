import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!: Product;
  @Output() productDeleted: EventEmitter<number> = new EventEmitter<number>();
  isLoading: boolean = false;
  public constructor(private productService: ProductService,
    @Inject('BaseURL') public baseUrl: string) { }
  deleteProduct(id: number) {
    this.isLoading = true; // Activer le chargement
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        // Désactiver le chargement
        this.isLoading = false;
        // Émettre l'événement avec l'identifiant du produit supprimé
        this.productDeleted.emit(id);
      }, error: () => {
        console.log("error");
      }
    });
  }

}

