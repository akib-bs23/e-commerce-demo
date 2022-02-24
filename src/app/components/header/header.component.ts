import { Component, OnInit } from '@angular/core';
import {
  Product,
  ShoppingCartService,
} from '../../services/shopping-cart.service';
import {
  faUser,
  faCartArrowDown,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { ToggleService } from 'src/app/services/toggle.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faCartPlus = faCartArrowDown;
  faBars = faBars;
  toggleMenu: boolean = false;
  visible: Observable<boolean> | undefined;
  items: Product[] = [];

  constructor(
    private _cartService: ShoppingCartService,
    private toggleService: ToggleService,
    private router: Router
  ) {
    router.events.subscribe(() => {
      this.toggleMenu = false;
    });
  }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe((res) => {
      return (this.items = res);
    });
  }
  toggleCart(): void {
    // this.visible = !this.visible;
    // this._cartService.setToggle(this.visible);
    this.toggleService.toggleSidebarState();
  }
  toggleSidebar() {
    //  this.visible = this.toggleService.toggleSidebarState();
    this.toggleService.toggleSidebarState();
  }
}
