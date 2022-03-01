import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css'],
})
export class ThankYouComponent implements OnInit {
  transactionToken: string | undefined;
  message: string | undefined;
  status: string | undefined;
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      console.log(params);
      this.transactionToken = params['transactionToken'];
      this.message = params['message'];
      this.status = params['status'];
    });
  }
}
