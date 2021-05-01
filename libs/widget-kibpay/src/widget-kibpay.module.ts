import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { WidgetKibpayService } from './widget-kibpay.service';
import { WidgetKibpayAssetService } from './utilities/widget-kibpay-asset.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KibpayDataModule } from '@kibpay/widget-kibpay-data';
import { KibpayLogoComponent } from './kibpay-logo/kibpay-logo.component';
import { KibpayLoaderComponent } from './kibpay-loader/kibpay-loader.component';
import { KibpayErrorComponent } from './kibpay-error/kibpay-error.component';
import { WidgetKibpayComponent } from './widget-kibpay.component';
import { KibpayPayerComponent } from './kibpay-payer/kibpay-payer.component';
import { KibpayPaymentComponent } from './kibpay-payment/kibpay-payment.component';
import { KibpayKnetComponent } from './kibpay-knet/kibpay-knet.component';
import { KibpayAppRoutingModule } from './widget-kibpay-routing.module';

@NgModule({
  declarations: [
    KibpayLogoComponent,
    KibpayLoaderComponent,
    KibpayErrorComponent,
    WidgetKibpayComponent,
    KibpayPayerComponent,
    KibpayPaymentComponent,
    KibpayKnetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    KibpayAppRoutingModule,
    BackbaseCoreModule.withConfig({
      classMap: { WidgetKibpayComponent }
    }),
    KibpayDataModule.forRoot({
      apiRoot: '/api',
      servicePath: '/dis-kibpay-service',
    })
  ],
  providers: [
    WidgetKibpayService,
    WidgetKibpayAssetService
  ]
})
export class WidgetKibpayModule { }