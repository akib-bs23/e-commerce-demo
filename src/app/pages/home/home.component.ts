import { Component, OnInit } from '@angular/core';
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  Product,
  ShoppingCartService,
} from 'src/app/services/shopping-cart.service';
// import { productsData } from 'src/productsData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  star = faStar;
  love = faHeart;
  cart = faShoppingCart;

  products: Product[] = [];
  // allProducts: Product[] = [];

  constructor(private cartService: ShoppingCartService) {
    this.cartService.getProducts().subscribe((res) => {
      return (this.products = res);
    });
  }

  ngOnInit(): void {}
}
