import { Component, Input, OnInit } from '@angular/core';
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { productsData } from '../../../../productsData';
import {
  Product,
  ShoppingCartService,
} from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  star = faStar;
  love = faHeart;
  // products = productsData;
  @Input() productItem!: Product;

  constructor(private _shops: ShoppingCartService) {}

  addToCart(product: Product) {
    this._shops.addToCart(product);
  }

  ngOnInit(): void {}
}
