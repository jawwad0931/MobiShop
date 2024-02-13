import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {
    path:'',component:ProductListComponent
  },
  {
    path: 'products/:productId', component: ProductDetailsComponent
  },
  { 
    path: 'cart', component: CartComponent 
  },
  { 
    path: 'thanks', component: ThanksComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
