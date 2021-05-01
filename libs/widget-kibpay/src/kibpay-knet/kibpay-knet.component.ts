import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppConstants } from '../utilities/widget-kibpay.constants';
import { WidgetKibpayService } from '../widget-kibpay.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { WidgetKibpayAssetService } from '../utilities/widget-kibpay-asset.service';

@Component({
  selector: 'kp-kibpay-knet',
  templateUrl: `./kibpay-knet.component.html`,
  styleUrls: ['./kibpay-knet.component.scss']
})
export class KibpayKnetComponent implements OnInit { 

  AppConstants = AppConstants;
  paymentInfo: any = {};
  isLoaded: boolean = false;
  showTransactionDetails: boolean = false;
  showSubmit: boolean = false;

  constructor(private widgetKibpayService: WidgetKibpayService,
    private cdref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrManager,
    private widgetKibpayAssetService: WidgetKibpayAssetService) {}

  readonly iconSuccess = this.widgetKibpayAssetService.getAsset("icon-success.png");
  readonly iconError = this.widgetKibpayAssetService.getAsset("icon-error.png");

  ngOnInit() {
    this.paymentInfo = {};
    this.isLoaded = false;
    this.checkParams();
  }

  checkParams() {
    let paramsObj: any = {};
    
    let tempUrl = this.router.url;
    if(this.router.url.includes("?")) {
      tempUrl = this.router.url.split("?")[0]; 
    }

    if(tempUrl.includes("success")) {
      paramsObj.action = "success";
    }
    else if(tempUrl.includes("failure")) {
      paramsObj.action = "failure";
    }

    this.route.queryParams.subscribe(params => {
      if(params.Id) {
        paramsObj.Id = params.Id;
      }
      if(params.trandata) {
        paramsObj.trandata = params.trandata;
      }
    });
    
    this.getPaymentResult(paramsObj);
  }

  getPaymentResult(paramsObj: any) {
    if(paramsObj.action && paramsObj.Id && paramsObj.trandata) {
      this.widgetKibpayService.getPaymentResult(paramsObj)
      .subscribe(
        response => {
          this.paymentInfo = response;
          this.isLoaded = true;
          this.cdref.detectChanges();
      },
      error => {
        this.router.navigateByUrl("/error");
        this.toastr.errorToastr((error && error.message) ? error.message : "Error");
        this.showSubmit = true;
        this.isLoaded = true;
        this.cdref.detectChanges();
      });
    }
    else {
      this.router.navigateByUrl("/error");
    }
  }

  /*checkParams() {
    let paramsObj: any = {};

    this.route.queryParams.subscribe(params => {
      if(params.action) {
        paramsObj.action = params.action;
      }
      if(params.Id) {
        paramsObj.Id = params.Id;
      }
      if(params.trandata) {
        paramsObj.trandata = params.trandata;
      }
    });

    this.getPaymentResult(paramsObj);
  }

  getPaymentResult(paramsObj: any) {
    if(paramsObj.action && paramsObj.Id && paramsObj.trandata) {
      this.widgetKibpayService.getPaymentResult(paramsObj)
      .subscribe(
        response => {
          this.paymentInfo = response;
          if(this.paymentInfo.state == AppConstants.KNET_FAILED) {
            this.showSubmit = true;
          }
          this.isLoaded = true;
          this.cdref.detectChanges();
      },
      error => {
        this.router.navigateByUrl("/error");
        /*this.toastr.errorToastr((error && error.message) ? error.message : "Error");
        this.showSubmit = true;
        this.isLoaded = true;
        this.cdref.detectChanges();
      });
    }
    else {
      this.toastr.errorToastr("Some error occured");
    }
  }*/
}