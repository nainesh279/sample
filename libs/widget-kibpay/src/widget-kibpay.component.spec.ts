import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { WidgetKibpayComponent } from './widget-kibpay.component';
import { DebugElement } from '@angular/core';
import { KibpayLogoComponent } from './kibpay-logo/kibpay-logo.component';
import { KibpayLoaderComponent } from './kibpay-loader/kibpay-loader.component';
import { KibpayKnetComponent } from './kibpay-knet/kibpay-knet.component';
import { KibpayPayerComponent } from './kibpay-payer/kibpay-payer.component';
import { KibpayErrorComponent } from './kibpay-error/kibpay-error.component';
import { KibpayPaymentComponent } from './kibpay-payment/kibpay-payment.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WidgetKibpayComponent', () => {
  let component: WidgetKibpayComponent;
  let fixture: ComponentFixture<WidgetKibpayComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [    
        RouterTestingModule    
      ],
      declarations: [ 
        KibpayLogoComponent,
        KibpayLoaderComponent,
        KibpayErrorComponent,
        WidgetKibpayComponent,
        KibpayPayerComponent,
        KibpayPaymentComponent,
        KibpayKnetComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetKibpayComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});