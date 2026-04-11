import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NgForm } from '@angular/forms';
import { Product } from '../shared/product';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product = new Product(null, "", "", 0, 0, "");
  isLoading: boolean = false; // Variable pour suivre l'état de chargement
  isUpdate = false;
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.paramMap.pipe(
        switchMap(result => {
          let id = result.get('id');
          // Vérifie que id n'est ni null ni "-1"
          if (id && id !== "-1") {  
            // Activer le chargement
            this.isLoading = true; 
            this.isUpdate=true;
            return this.productService.getProductById(id);
          } else {
            // Retourne un observable vide si l'ID n'est pas valide
            return []; 
          }

        })
      ).subscribe({
        next: (product) => {
          if (product) {
            this.product = product;
            this.isLoading = false; // Désactiver le chargement
          }
        }
      });
    }
    /*
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (result) => {
        let id = result.get('id');
        if (id != "-1") this.initProduct(id);
      }
    });

  }

  initProduct(id: any) {
    this.productService.getProductById(id)
      .subscribe({
        next: (product) => { this.product = product }
      });

  }*/
  onSubmit() {
    /*console.log('add product')
    this.productService.addProduct(this.product);
    this.router.navigateByUrl("/products");*/
    this.isLoading = true; // Activer le chargement lors de la soumission du formulaire
    if (this.product.id == null) {
      this.productService.addProduct(this.product)
        .subscribe({
          next: () => {
           
            this.isLoading = false; //Desactiver le spinner
            this.router.navigateByUrl('/products');
          }
        })
    } else {
      this.productService.updateContact(this.product)
        .subscribe({
          next: () => {
            this.isLoading = false; //Desactiver le spinner
            this.router.navigateByUrl('/products');
          }
        })
    };
  }
}