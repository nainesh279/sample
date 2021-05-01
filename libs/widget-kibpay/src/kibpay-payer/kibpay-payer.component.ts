import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppConstants } from '../utilities/widget-kibpay.constants';
import { WidgetKibpayService } from '../widget-kibpay.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { WidgetKibpaySeoService } from '../utilities/widget-kibpay-seo.service';
import { Meta } from '@angular/platform-browser';

@Component({  
  selector: 'kp-kibpay-payer',
  templateUrl: `./kibpay-payer.component.html`,
  styles: []
})

export class KibpayPayerComponent implements OnInit {

  AppConstants = AppConstants;
  paymentInfo: any = {};
  isLoaded: boolean = false;
  isDirectPayment: boolean = false;
  showSubmit: boolean = false;

  constructor(private widgetKibpayService: WidgetKibpayService,
    private cdref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrManager,
    private seoService: WidgetKibpaySeoService,
    private metaTagService: Meta) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      let seoData = data['seo'];
      this.seoService.updateMetaTags(seoData['metaTags']);
    });
    
    this.paymentInfo = {};
    this.isLoaded = false;
    this.showSubmit = false;
    this.checkParams();
  }

  checkParams() {
    let publicIdPay: string = "";

    let tempUrl = this.router.url;
    if(this.router.url.includes("?")) {
      tempUrl = this.router.url.split("?")[0]; 
    }

    if(tempUrl.includes("pay") || tempUrl.includes("direct")) {
      this.route.queryParams.subscribe(params => {
        if(params.Id) {
          publicIdPay = params.Id;
        }
      });

      if (tempUrl.includes("direct")) {
        this.isDirectPayment = true;
      }
    }

    this.getPaymentInfo(publicIdPay);
  }

  getPaymentInfo(publicIdPay: string) {
    if(publicIdPay) {
      this.widgetKibpayService.getPaymentInfo(publicIdPay)
      .subscribe(
        response => {
          this.paymentInfo = response;
          this.processSeenPayment();
      },
      error => {
        this.toastr.errorToastr((error && error.message) ? error.message : "Error");
        this.isLoaded = true;
        this.cdref.detectChanges();
      });
    }
    else {
      this.router.navigateByUrl("/error");
    }
  }

  processSeenPayment() {
    let queryParams: any = {
      Id: this.paymentInfo.publicAcceptId,
      action: "seen"
    };

    this.widgetKibpayService.processPaymentAction(queryParams)
    .subscribe(
      response => {
        if(this.isDirectPayment) {
          this.acceptPayment();
        }
        else {
          this.isLoaded = true;
          this.showSubmit = true;
          this.cdref.detectChanges();
        }
    },
    error => {
      this.toastr.errorToastr((error && error.message) ? error.message : "Error");
      this.isLoaded = true;
      this.cdref.detectChanges();
    });
  }

  acceptPayment() {
    this.isLoaded = false;
    let queryParams: any = {
      Id: this.paymentInfo.publicAcceptId,
      action: "accept"
    };
    
    this.widgetKibpayService.processPaymentAction(queryParams)
    .subscribe(
      response => {
        if(response?.redirectUrl) {
          window.open(response.redirectUrl, "_self");
        }
        else {
          this.toastr.errorToastr("Some error occured");
          this.isLoaded = true;
          this.cdref.detectChanges();
        }
    },
    error => {
      this.toastr.errorToastr((error && error.message) ? error.message : "Error");
      this.isLoaded = true;
      this.cdref.detectChanges();
    });
  }

  rejectPayment() {
    this.isLoaded = false;
    this.showSubmit = false;
    let queryParams: any = {
      Id: this.paymentInfo.publicRejectId,
      action: "reject"
    };

    this.widgetKibpayService.processPaymentAction(queryParams)
    .subscribe(
      response => {
        this.paymentInfo.state = AppConstants.REJECTED;
        this.isLoaded = true;
        this.cdref.detectChanges();
    },
    error => {
      this.toastr.errorToastr((error && error.message) ? error.message : "Error");
      this.isLoaded = true;
      this.cdref.detectChanges();
    });
  }

  /*checkParams() {
    let queryParams: any = {};

    let tempUrl = this.router.url;
    if(this.router.url.includes("?")) {
      tempUrl = this.router.url.split("?")[0]; 
    }

    this.route.queryParams.subscribe(params => {
      if(params.action) {
        queryParams.action = params.Id;

        if(params.action == "direct") {
          this.isDirectPayment = true;
        }
      }
      if(params.Id) {
        queryParams.Id = params.Id;
      }
    });

    this.getPaymentInfo(queryParams);
  }

  getPaymentInfo(queryParams: any) {
    if(queryParams.action && queryParams.Id) {
      this.widgetKibpayService.getPaymentInfo(queryParams.Id)
      .subscribe(
        response => {
          this.paymentInfo = response;
          this.processSeenPayment();
      },
      error => {
        this.toastr.errorToastr((error && error.message) ? error.message : "Error");
        this.isLoaded = true;
        this.cdref.detectChanges();
      });
    }
    else {
      this.router.navigateByUrl("/error");
    }
  }*/
}
