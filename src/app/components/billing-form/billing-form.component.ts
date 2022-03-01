import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css'],
})
export class BillingFormComponent {
  constructor(
    private router: Router,
    private cartService: ShoppingCartService
  ) {}

  left = faAngleLeft;
  log = (fname: any) => console.log(fname);
  totalPrice: number = 0;

  onClickSubmit = (value: any) => {
    alert(JSON.stringify(value));
    this.totalPrice = this.cartService.getTotal();

    const orderObj = {
      orderId: '1542365',
      orderDate: new Date().toISOString(),
      callbackUrl: 'http://' + location.host + '/thank-you',
      ipnUrl: 'http://' + location.host + '/thank-you',
      description: 'Description',
      transactionAmount: {
        orderAmount: this.totalPrice,
        shippingCharge: 0,
        totalAmount: this.totalPrice,
        totalDiscountAmount: 0,
        taxAmount: 0,
        currency: 'TTD',
      },
      customerInfo: {
        taxId: '2536521',
        id: '2536521',
        email: '`${value.email}`',
        name: '`${value.fname} ${value.lname}`',
        phone: '`${value.phone}`',
        address1: '`${value.addressOne}`',
        address2: '`${value.addressTwo}`',
        city: '`${value.city}`',
        state: '`${value.town}`',
        country: '`${value.country}`',
        zipcode: '77412',
      },
      orderItem: [
        {
          id: '3652411',
          amount: 100.3,
          currency: 'TTD',
          discountAmounts: 2.3,
          title: 'T-Short',
          description: 'T-Short description',
          type: 'SHORT',
          created: '2022-02-10T09:16:18.723Z',
          quantity: 1,
        },
      ],
    };

    // @ts-ignore
    window['Cpay'].proceed(orderObj);
  };
}
