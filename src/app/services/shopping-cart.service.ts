import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { productsData } from 'src/productsData';

export interface Product {
  price: number;
  image: string;
  name: string;
  details: string;
  quantity: number;
  uuid?: any;
  remove?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}
  allProducts = productsData;

  toggle = new BehaviorSubject<boolean>(false);
  public $toggle = this.toggle.asObservable();

  public cartItemLists$: Product[] = [];
  public allProductLists$ = new BehaviorSubject<Product[]>([]);
  public totalPrice = 0;
  public totalSinglePrice = 0;

  getProducts(): Observable<Product[]> {
    return this.allProductLists$.asObservable();
  }

  addToCart(product: Product) {
    let currentListsId = this.cartItemLists$.map((list) => list.uuid);

    if (!currentListsId.includes(product.uuid)) {
      this.cartItemLists$.push(product);
      this.allProductLists$.next(this.cartItemLists$);
    } else {
      product.quantity += 1;
    }
  }

  increaseQuantity(product: Product) {
    product.quantity += 1;
  }

  decreaseQuantity(product: Product) {
    if (product.quantity != 1) {
      product.quantity -= 1;
    }
  }

  deleteCart(product: Product) {
    let index = this.cartItemLists$.findIndex((a) => a.uuid === product.uuid);
    if (index !== -1) {
      this.cartItemLists$.splice(index, 1);
    }
    return this.cartItemLists$;
  }

  get totalProductPrice() {
    let allQuantities = this.cartItemLists$.map((q) => q.quantity);
    let allPrices = this.cartItemLists$.map((p) => p.price);

    return allQuantities.reduce((sum, val, i) => sum + val * allPrices[i], 0);
  }
}
