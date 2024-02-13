import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormBuilder} from '@angular/forms';
import { products } from '../products';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products:any = products;
  
  constructor(private cartService: CartService, private formBuilder:FormBuilder){}

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
