import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path:'',canActivate:[authGuard],component:HomeComponent},  
  {path:'products',canActivate:[authGuard], component:ProductsComponent},
  {path:'products/edit',canActivate:[authGuard], component:EditProductComponent},
  {path:'signin',component:SigninComponent},
  {path:"**",component:NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
