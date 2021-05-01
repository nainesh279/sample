import { PaymentResponse, PaymentAction } from './widget-kibpay-data.interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Inject, InjectionToken } from "@angular/core";
import { ServiceDataHttpConfig, HTTP_PARAMS_FACTORY, HttpParamsFactory } from "@backbase/foundation-ang/data-http";

const version = 'v1';
export const KIBPAY_DATA_CONFIG = new InjectionToken("KibpayData Data Service :: HTTP Config");

@Injectable({
    providedIn: 'root'
})

export class KibpayDataService {
    constructor(private readonly http: HttpClient, 
    @Inject(KIBPAY_DATA_CONFIG)
    private readonly config: ServiceDataHttpConfig, 
    @Inject(HTTP_PARAMS_FACTORY)
    private readonly toHttpParams: HttpParamsFactory) { } 

    getPaymentInfo(publicIdPay: string, params: {}, headers: HttpHeaders = new HttpHeaders({})): Observable<HttpResponse<PaymentResponse>> {
        const uri = `${this.config.apiRoot}${this.config.servicePath}/client-api/${version}/kibpay/public/${publicIdPay}`;
        return this.http.request<PaymentResponse>('get', uri, {
            params: this.toHttpParams(params || {}),
            headers,
            observe: 'response',
            responseType: 'json',
            withCredentials: false,
        }); 
    }

    processPaymentAction(Id: string, params: {
        action: string
    }, headers: HttpHeaders = new HttpHeaders({})): Observable<HttpResponse<PaymentAction>> {
        const uri = `${this.config.apiRoot}${this.config.servicePath}/client-api/${version}/kibpay/public/${Id}?action=${params.action}`;
        return this.http.request<PaymentAction>('patch', uri, {
            params: this.toHttpParams(params || {}),
            headers,
            observe: 'response',
            responseType: 'json',
            withCredentials: false,
        }); 
    }

    getPaymentResult(Id: string, params: {
        action: string,
        encryptedKnetPayload: string
    }, headers: HttpHeaders = new HttpHeaders({})): Observable<HttpResponse<PaymentResponse>> {
        const uri = `${this.config.apiRoot}${this.config.servicePath}/client-api/${version}/kibpay/public/${Id}?action=${params.action}&encryptedKnetPayload=${params.encryptedKnetPayload}`;
        return this.http.request<PaymentResponse>('patch', uri, {
            params: this.toHttpParams(params || {}),
            headers,
            observe: 'response',
            responseType: 'json',
            withCredentials: false,
        }); 
    }
}
