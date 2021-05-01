import { Component, OnInit, Input  } from '@angular/core';
import { AppConstants } from '../utilities/widget-kibpay.constants';

@Component({
  selector: 'kp-kibpay-payment',
  templateUrl: `./kibpay-payment.component.html`,
  styles: []
})
export class KibpayPaymentComponent implements OnInit {

  @Input() paymentInfo: any = {};
  AppConstants = AppConstants;

  constructor() {}

  ngOnInit() {}

}