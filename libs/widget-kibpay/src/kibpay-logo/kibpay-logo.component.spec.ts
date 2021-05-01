import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { KibpayLogoComponent } from './kibpay-logo.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('KibpayLogoComponent', () => {
  let component: KibpayLogoComponent;
  let fixture: ComponentFixture<KibpayLogoComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KibpayLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KibpayLogoComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load logoContainer', () => {
    let logoContainer = fixture.debugElement.query(By.css('.logo-container'));
    expect(logoContainer).toBeTruthy();
  });

});