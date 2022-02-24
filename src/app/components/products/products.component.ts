import { Component, OnInit } from '@angular/core';
import {
  Product,
  ShoppingCartService,
} from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(private _shoppingService: ShoppingCartService) {}

  ngOnInit(): void {
    this.products = this._shoppingService.allProducts;
  }
}
