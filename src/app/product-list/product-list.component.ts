import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products:any = products;
  // yahan maine variable aur initaializer dono ko same rakha hai
  // Latestproducts:any = Latestproducts;
}
