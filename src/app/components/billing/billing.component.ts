import { Component, OnInit } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import {
  Product,
  ShoppingCartService,
} from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
})
export class BillingComponent implements OnInit {
  left = faAngleLeft;
  public allLists: Product[] = [];
  public singleTotal: number = 0;
  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.allLists = this.cartService.cartItemLists$;
  }

  get totalPrice() {
    return this.cartService.totalProductPrice;
  }
}
