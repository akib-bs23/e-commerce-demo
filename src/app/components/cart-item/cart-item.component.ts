import { Component, OnInit } from '@angular/core';
import { faTrash, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Product,
  ShoppingCartService,
} from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  delete = faTrash;
  left = faAngleLeft;

  public allLists: Product[] = [];
  public totalPrice: number = 0;
  public singleTotal: number = 0;

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.allLists = this.cartService.cartItemLists$;
    this.totalPrice = this.cartService.getTotal();
  }

  deleteFromCart(product: Product) {
    this.cartService.deleteCart(product);
    this.totalPrice = this.cartService.getTotal();
  }

  addQuantity(product: Product) {
    this.cartService.increaseQuantity(product);
    this.totalPrice = this.cartService.getTotal();
  }

  removeQuantity(product: Product) {
    this.cartService.decreaseQuantity(product);
    this.totalPrice = this.cartService.getTotal();
  }
}
