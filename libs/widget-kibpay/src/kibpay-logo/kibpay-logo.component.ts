import { Component } from '@angular/core';
import { WidgetKibpayAssetService } from '../utilities/widget-kibpay-asset.service';

@Component({
  selector: 'kp-kibpay-logo',
  templateUrl: `./kibpay-logo.component.html`,
  styleUrls: [`./kibpay-logo.component.scss`]
})

export class KibpayLogoComponent { 
  constructor(private widgetKibpayAssetService: WidgetKibpayAssetService) {}

  readonly logo = this.widgetKibpayAssetService.getAsset("logo.png");
}