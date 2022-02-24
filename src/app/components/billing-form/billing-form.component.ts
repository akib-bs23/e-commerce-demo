import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css'],
})
export class BillingFormComponent {
  constructor(private router: Router) {}
  left = faAngleLeft;
  log = (fname: any) => console.log(fname);

  onClickSubmit = (value: any) => {
    setTimeout(() => {
      this.router.navigate(['/thank-you']);
    }, 2000);
    alert(JSON.stringify(value));
  };
}
