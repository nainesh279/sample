import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KibpayPaymentComponent } from './kibpay-payment.component';
import { DebugElement } from '@angular/core';
import { By} from '@angular/platform-browser';

describe('KibpayPaymentComponent', () => {
  let component: KibpayPaymentComponent;
  let fixture: ComponentFixture<KibpayPaymentComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        KibpayPaymentComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KibpayPaymentComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('should show Payment Request Container if Payment Info Exists', () => {
    let requestLength = fixture.debugElement.queryAll(By.css('.payment-item-container')).length;
    let rejectLength = fixture.debugElement.queryAll(By.css('.payment-rejected-container')).length;
    expect(requestLength).toEqual(1);
    expect(rejectLength).toEqual(0);
  });

  it('should show Reject Container if Payment Info does not Exist', () => {
    component.paymentInfo = {
      type: "KIBPAY_REQUEST",
      state: "REJECTED",
      language: "en"
    };
    fixture.detectChanges();
    let requestLength = fixture.debugElement.queryAll(By.css('.payment-item-container')).length;
    let rejectLength = fixture.debugElement.queryAll(By.css('.payment-rejected-container')).length;
    expect(requestLength).toEqual(0);
    expect(rejectLength).toEqual(1);
  });

});