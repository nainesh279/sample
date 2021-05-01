import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { KibpayKnetComponent } from './kibpay-knet.component';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ng6-toastr-notifications';
import { WidgetKibpayService } from '../widget-kibpay.service';
import { of } from 'rxjs';
import { KibpayLogoComponent } from '../kibpay-logo/kibpay-logo.component';
import { KibpayLoaderComponent } from '../kibpay-loader/kibpay-loader.component';
import { KibpayErrorComponent } from '../kibpay-error/kibpay-error.component';
import { KibpayPayerComponent } from '../kibpay-payer/kibpay-payer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentResponse } from '../utilities/widget-kibpay.interfaces';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('KibpayKnetComponent', () => {
  let component: KibpayKnetComponent;
  let fixture: ComponentFixture<KibpayKnetComponent>;
  let debugElement: DebugElement;
  let router: Router;

  const routes: Routes = [
    { path: 'pay', component: KibpayPayerComponent},
    { path: 'direct', component: KibpayPayerComponent},
    { path: 'success', component: KibpayKnetComponent},
    { path: 'failure', component: KibpayKnetComponent},
    { path: 'error', component: KibpayErrorComponent},
    { path: '**', redirectTo: 'error', pathMatch: 'full' }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        KibpayKnetComponent,
        KibpayLogoComponent,
        KibpayLoaderComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule
      ],
      providers:[
        WidgetKibpayService
      ]
    })
    .compileComponents();
  })); 

  beforeEach(() => {
    fixture = TestBed.createComponent(KibpayKnetComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPaymentResult method for Success', () => {
    router.navigateByUrl("/success?&Id=12345&trandata=ABCDEF");
    const getPaymentResult = spyOn(component, 'getPaymentResult');
    component.ngOnInit();
    fixture.detectChanges();
    expect(getPaymentResult).toHaveBeenCalled();
  });

  it('should call getPaymentResult method for Failure', () => {
    router.navigateByUrl("/failure?&Id=12345&trandata=ABCDEF");
    const getPaymentResult = spyOn(component, 'getPaymentResult');
    component.ngOnInit();
    fixture.detectChanges();
    expect(getPaymentResult).toHaveBeenCalled();
  });

  it('should call subscribe method for getPaymentResult method for Success', fakeAsync(() => {
    const paymentInfo: PaymentResponse = { 
      type: "KIBPAY_REQUEST",
      state: "CREDITED",
      language: "en",
      payeeName: "Sam Smith",
      amount: "10.042",
      currency: "KWD",
      description: "Dinner and cinema"
    };
 
    const paramsObj = {
      action: "success",
      Id: "12345",
      trandata: "ABCDEF"
    }

    const service = fixture.debugElement.injector.get(WidgetKibpayService); 

    const getSpy = spyOn(service, 'getPaymentResult').and.returnValue( of(paymentInfo));
    const spyForGet = spyOn(service.getPaymentResult(paramsObj), 'subscribe');
    component.getPaymentResult(paramsObj);
    tick();
    fixture.detectChanges();
    expect(getSpy).toHaveBeenCalledBefore(spyForGet);
    expect(spyForGet).toHaveBeenCalled();
  }));

  it('should call subscribe method for getPaymentResult method for Failure', fakeAsync(() => {
    const paymentInfo: PaymentResponse = { 
      type: "KIBPAY_REQUEST",
      state: "KNET_FAILED",
      language: "en",
      errorText: "Problem occurred while processing direct debit.",
      payeeName: "Sam Smith",
      amount: "10.042",
      currency: "KWD",
      description: "Dinner and cinema"
    };
 
    const paramsObj = {
      action: "failure",
      Id: "12345",
      trandata: "ABCDEF"
    }

    const service = fixture.debugElement.injector.get(WidgetKibpayService);

    const getSpy = spyOn(service, 'getPaymentResult').and.returnValue( of(paymentInfo));
    const spyForGet = spyOn(service.getPaymentResult(paramsObj), 'subscribe');
    component.getPaymentResult(paramsObj);
    tick();
    fixture.detectChanges();
    expect(getSpy).toHaveBeenCalledBefore(spyForGet);
    expect(spyForGet).toHaveBeenCalled();
  }));

});