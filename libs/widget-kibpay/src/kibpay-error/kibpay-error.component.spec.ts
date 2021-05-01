import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { KibpayErrorComponent } from './kibpay-error.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('KibpayErrorComponent', () => {
  let component: KibpayErrorComponent;
  let fixture: ComponentFixture<KibpayErrorComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KibpayErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KibpayErrorComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load errorContainer', () => {
    let errorContainer = fixture.debugElement.query(By.css('.payment-rejected-container'));
    expect(errorContainer).toBeTruthy();
  });

});