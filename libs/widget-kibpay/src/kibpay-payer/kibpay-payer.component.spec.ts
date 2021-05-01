import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { KibpayPayerComponent } from './kibpay-payer.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ng6-toastr-notifications';
import { WidgetKibpayService } from '../widget-kibpay.service';
import { of } from 'rxjs';
import { Router, Routes } from '@angular/router';
import { KibpayLogoComponent } from '../kibpay-logo/kibpay-logo.component';
import { KibpayLoaderComponent } from '../kibpay-loader/kibpay-loader.component';
import { KibpayErrorComponent } from '../kibpay-error/kibpay-error.component';
import { KibpayKnetComponent } from '../kibpay-knet/kibpay-knet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentResponse, PaymentAction } from '../utilities/widget-kibpay.interfaces'; 

describe('KibpayPayerComponent', () => { 
  let component: KibpayPayerComponent;
  let fixture: ComponentFixture<KibpayPayerComponent>;
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
        KibpayPayerComponent,
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
    fixture = TestBed.createComponent(KibpayPayerComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPaymentInfo method for normal Pay', () => {
    router.navigateByUrl("/pay?Id=12345");
    const getPaymentInfoSpy = spyOn(component, 'getPaymentInfo');
    component.checkParams();
    fixture.detectChanges();
    expect(getPaymentInfoSpy).toHaveBeenCalled();
  });

  it('should call subscribe method for getPaymentInfo for normal Pay', fakeAsync(() => {
    const paymentInfo: PaymentResponse = {
      type: "KIBPAY_REQUEST",
      state: "ACTIVE",
      language: "en",
      payeeName: "Sam Smith",
      amount: "10.042",
      currency: "KWD",
      description: "Dinner and cinema",
      publicAcceptId: "k021ymcb1111111",
      publicRejectId: "k021ymcb2222222"
    };

    const seenPaymentResponse: PaymentAction = {
      type: "KIBPAY_REQUEST",
      state: "SEEN",
      language: "en"
    };
 
    const queryParams: any = {
      action: "pay",
      Id: "12345"
    };

    const service = fixture.debugElement.injector.get(WidgetKibpayService);

    const getSpy = spyOn(service, 'getPaymentInfo').and.returnValue( of(paymentInfo));
    const spyForGet = spyOn(service.getPaymentInfo(queryParams), 'subscribe');
    component.getPaymentInfo(queryParams);
    tick();
    fixture.detectChanges();
    expect(getSpy).toHaveBeenCalledBefore(spyForGet);
    expect(spyForGet).toHaveBeenCalled();
    
    fixture.detectChanges();

    const seenQueryParams: any = {
      Id: component.paymentInfo.publicAcceptId,
      action: "seen"
    };
    const seenSpy = spyOn(service, 'processPaymentAction').and.returnValue( of(seenPaymentResponse));
    const spyForSeen = spyOn(service.processPaymentAction(seenQueryParams), 'subscribe');
    component.processSeenPayment();
    tick();
    fixture.detectChanges();
    expect(seenSpy).toHaveBeenCalledBefore(spyForSeen);
    expect(spyForSeen).toHaveBeenCalled();
  }));

  it('should call getPaymentInfo metho for direct Pay', () => {
    router.navigateByUrl("/direct?Id=12345");
    const getPaymentInfoSpy = spyOn(component, 'getPaymentInfo');
    component.checkParams();
    fixture.detectChanges();
    expect(getPaymentInfoSpy).toHaveBeenCalled();
  });

  it('should call subscribe method for getPaymentInfo for direct Pay', fakeAsync(() => {
    const paymentInfo: PaymentResponse = {
      type: "KIBPAY_REQUEST",
      state: "ACTIVE",
      language: "en",
      payeeName: "Sam Smith",
      amount: "10.042",
      currency: "KWD",
      description: "Dinner and cinema",
      publicAcceptId: "k021ymcb1111111",
      publicRejectId: "k021ymcb2222222"
    };

    const seenPaymentResponse: PaymentAction = {
      type: "KIBPAY_REQUEST",
      state: "SEEN",
      language: "en"
    };
 
    const queryParams: any = {
      action: "pay",
      Id: "12345"
    };

    const service = fixture.debugElement.injector.get(WidgetKibpayService);

    const getSpy = spyOn(service, 'getPaymentInfo').and.returnValue( of(paymentInfo));
    const spyForGet = spyOn(service.getPaymentInfo(queryParams), 'subscribe');
    component.getPaymentInfo(queryParams);
    tick();
    fixture.detectChanges();
    expect(getSpy).toHaveBeenCalledBefore(spyForGet);
    expect(spyForGet).toHaveBeenCalled();
    
    fixture.detectChanges();

    const seenQueryParams: any = {
      Id: component.paymentInfo.publicAcceptId,
      action: "seen"
    };
    const seenSpy = spyOn(service, 'processPaymentAction').and.returnValue( of(seenPaymentResponse));
    const spyForSeen = spyOn(service.processPaymentAction(seenQueryParams), 'subscribe');
    component.processSeenPayment();
    tick();
    fixture.detectChanges();
    expect(seenSpy).toHaveBeenCalledBefore(spyForSeen);
    expect(spyForSeen).toHaveBeenCalled();
  }));

  it("should call the acceptPayment() function on clicking Accept Payment Button", function() {
    component.paymentInfo = { 
      type: "KIBPAY_REQUEST",
      state: "ACTIVE",
      language: "en",
      payeeName: "Sam Smith",
      amount: "10.042",
      currency: "KWD",
      description: "Dinner and cinema",
      publicAcceptId: "k021ymcb1111111",
      publicRejectId: "k021ymcb2222222"
    };

    const acceptPaymentSpy = spyOn(component, 'acceptPayment');
    component.showSubmit = true;
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.btn-primary');
    button.click();
    fixture.detectChanges();
    expect(acceptPaymentSpy).toHaveBeenCalled();
  });

  it("should call the rejectPayment() function on clicking Reject Payment Button", function() {
    component.paymentInfo = { 
      type: "KIBPAY_REQUEST",
      state: "ACTIVE",
      language: "en",
      payeeName: "Sam Smith",
      amount: "10.042",
      currency: "KWD",
      description: "Dinner and cinema",
      publicAcceptId: "k021ymcb1111111",
      publicRejectId: "k021ymcb2222222"
    };
    
    const rejectPaymentSpy = spyOn(component, 'rejectPayment');
    component.showSubmit = true;
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.btn-secondary');
    button.click();
    fixture.detectChanges();
    expect(rejectPaymentSpy).toHaveBeenCalled();
  });

  it('should call subscribe method for acceptPayment', fakeAsync(() => { 
    const paymentAcceptResponse: PaymentResponse = {
      type: "KIBPAY_REQUEST",
      state: "KNET_CREATED",
      language: "en",
      redirectUrl: "https://kpay.com.kw/payment/link/path?paymentId=1234"
    };

    const queryParams: any = {
      Id: component.paymentInfo.publicAcceptId,
      action: "accept"
    };

    const service = fixture.debugElement.injector.get(WidgetKibpayService);
    const acceptPaymentSpy = spyOn(service, 'processPaymentAction').and.returnValue( of(paymentAcceptResponse));
    const spy = spyOn(service.processPaymentAction(queryParams), 'subscribe');
    component.acceptPayment();
    tick(); 
    fixture.detectChanges();
    expect(acceptPaymentSpy).toHaveBeenCalledBefore(spy);
    expect(spy).toHaveBeenCalled();
    //expect(component.paymentInfo.state).toBe(AppConstants.KNET_CREATED);
  }));

  it('should call subscribe method for rejectPayment', fakeAsync(() => {
    const paymentRejectResponse: PaymentResponse = {
      type: "KIBPAY_REQUEST",
      state: "REJECTED",
      language: "en"
    };

    const queryParams: any = {
      Id: component.paymentInfo.publicRejectId,
      action: "reject"
    };

    const service = fixture.debugElement.injector.get(WidgetKibpayService); 
    const rejectPaymentSpy = spyOn(service, 'processPaymentAction').and.returnValue( of(paymentRejectResponse));
    const spy = spyOn(service.processPaymentAction(queryParams), 'subscribe');
    component.rejectPayment();
    tick();
    fixture.detectChanges();
    expect(rejectPaymentSpy).toHaveBeenCalledBefore(spy);
    expect(spy).toHaveBeenCalled();
    //expect(spy).toHaveBeenCalledWith(queryParams);
  }));

});