import { Inject, Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Liste statique de produits
  private products: Product[] = PRODUCTS
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, 
              private processHTTPMsgService:ProcessHttpmsgService,
              @Inject('BaseURL') private baseUrl: string) {
    this.baseUrl = baseUrl + "products/"
  }


  // Méthode pour récupérer la liste des produits
  /*  getProducts() {
     return this.products;
   } */
  getProducts(): Observable<Product[]> {
    //return this.contacts;
    return this.http.get<Product[]>(this.baseUrl)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  //Méthode pour récuperer un produit par son id
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + id);
  }

  //Méthode pour supprimer un produit de la liste des produits
  /*   deleteProduct(id: number): void {
      const index = this.products.findIndex(product => product.id == id)
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    } */
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + id);
  }
  //Méthode pour ajouter un nouveu produit
  /* addProduct(product: Product) {
    product.id = this.products[this.products.length - 1].id + 1;
    this.products.push(product);
  } */
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product, this.httpOptions);
  }
  //Méthode pour mettre à jour un  produit

  updateContact(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + product.id, product, this.httpOptions)
  }


}