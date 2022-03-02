import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { BillingComponent } from './components/billing/billing.component';
import { ProductsComponent } from './components/products/products.component';
import { BillingFormComponent } from './components/billing-form/billing-form.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartItemComponent,
    BillingComponent,
    ProductsComponent,
    BillingFormComponent,
    ThankYouComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products-details', component: ProductDetailsComponent },
      { path: 'cart-items', component: CartItemComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'thank-you', component: ThankYouComponent },
    ]),
  ],
  providers: [{ provide: 'Window', useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
