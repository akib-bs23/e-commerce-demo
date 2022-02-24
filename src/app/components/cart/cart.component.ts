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
  public totalPrice: number = 0;
  public singleTotal: number = 0;

  constructor(
    private cartService: ShoppingCartService,
    private toggleService: ToggleService
  ) {}

  ngOnInit(): void {
    this.allLists = this.cartService.cartItemLists$;
    this.totalPrice = this.cartService.getTotal();

    this.showCartArea = this.toggleService.getShowSidebar();
    // this.cartService.$toggle.subscribe((v) => {
    //   this.showCartArea = v;
    // });

    // console.log('Single Price---', this.singleTotal);
    // console.log('Total Price---', this.totalPrice);
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

  closeCartArea() {
    this.toggleService.toggleSidebarState();
  }
}
