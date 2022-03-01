import { Component, OnInit } from '@angular/core';
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import {
  Product,
  ShoppingCartService,
} from 'src/app/services/shopping-cart.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  close = faTimes;
  delete = faTrash;
  showCartArea: Observable<boolean> | undefined;

  public allLists: Product[] = [];
  public singleTotal: number = 0;

  constructor(
    private cartService: ShoppingCartService,
    private toggleService: ToggleService
  ) {}

  ngOnInit(): void {
    this.allLists = this.cartService.cartItemLists$;
    this.showCartArea = this.toggleService.getShowSidebar();
  }

  deleteFromCart(product: Product) {
    this.cartService.deleteCart(product);
  }

  addQuantity(product: Product) {
    this.cartService.increaseQuantity(product);
  }

  removeQuantity(product: Product) {
    this.cartService.decreaseQuantity(product);
  }

  closeCartArea() {
    this.toggleService.toggleSidebarState();
  }

  get totalPrice() {
    return this.cartService.totalProductPrice;
  }
}
