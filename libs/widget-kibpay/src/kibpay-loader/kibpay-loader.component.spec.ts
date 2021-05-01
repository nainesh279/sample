import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { KibpayLoaderComponent } from '../kibpay-loader/kibpay-loader.component';

describe('KibpayLoaderComponent', () => {
  let component: KibpayLoaderComponent;
  let fixture: ComponentFixture<KibpayLoaderComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KibpayLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KibpayLoaderComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load loader', () => {
    let loaderContainer = fixture.debugElement.query(By.css('.loader-container'));
    expect(loaderContainer).toBeTruthy();
  });

});