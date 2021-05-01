/*import { Injectable } from '@angular/core';
import { KibpayDataService, PaymentResponse, PaymentAction } from '@kibpay/widget-kibpay-data';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root' 
})

export class WidgetKibpayService {
    constructor(private readonly kibpayDataService : KibpayDataService) { }

    getPaymentInfo(publicIdPay: string) {
        return this.kibpayDataService.getPaymentInfo(publicIdPay, {}).pipe(
            switchMap((response: HttpResponse<PaymentResponse>): Observable<PaymentResponse | undefined> => {
                return response.body? of(response.body) : of({} as PaymentResponse);
            })
        );
    }

    processPaymentAction(params: any) {
        return this.kibpayDataService.processPaymentAction(params.Id, { action: params.action }).pipe(
            switchMap((response: HttpResponse<PaymentAction>): Observable<PaymentAction | undefined> => {
                return response.body? of(response.body) : of({} as PaymentAction);
            })
        );
    }

    getPaymentResult(params: any) {
        return this.kibpayDataService.getPaymentResult(params.Id, { action: params.action, encryptedKnetPayload: params.trandata }).pipe(
            switchMap((response: HttpResponse<PaymentResponse>): Observable<PaymentResponse | undefined> => {
                return response.body? of(response.body) : of({} as PaymentResponse);
            })
        );
    }
}*/

import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PaymentResponse, PaymentAction } from './utilities/widget-kibpay.interfaces';

@Injectable()

export class WidgetKibpayService {
    constructor() { }

    getPaymentInfo(publicIdPay: string) {
        return of({ 
            "type": "KIBPAY_REQUEST",
            "state": "ACTIVE",
            "language": "en",
            "payeeName": "Sam Smith",
            "amount": "10.042",
            "currency": "KWD",
            "description": "Dinner and cinema",
            "publicAcceptId": "k021ymcb1111111",
            "publicRejectId": "k021ymcb2222222"
        } as PaymentResponse);
    }

    processPaymentAction(paramsObj: any) {
        if(paramsObj.action == "seen") {
            return of({
                "type": "KIBPAY_REQUEST",
                "state": "SEEN",
                "language": "en"
            } as PaymentAction);
        }
        else if (paramsObj.action == "accept") {
            return of({
                "type": "KIBPAY_REQUEST",
                "state": "KNET_CREATED",
                "language": "en",
                "redirectUrl": "https://kpay.com.kw/payment/link/path?paymentId=1234"
            } as PaymentAction);
        }
        else if (paramsObj.action == "reject") {
            return of({
                "type": "KIBPAY_REQUEST",
                "state": "REJECTED",
                "language": "en"
            } as PaymentAction);
        }
        else {
            return of({} as PaymentAction);
        }
    }

    getPaymentResult(paramsObj: any) {
        if(paramsObj.action == "success") {
            return of({
                "type": "KIBPAY_REQUEST",
                "state": "CREDITED",
                "language": "en",
                "payeeName": "Sam Smith",
                "amount": "10.042",
                "currency": "KWD",
                "description": "Dinner and cinema"
            } as PaymentResponse);
        }
        else if (paramsObj.action == "failure") {
            return of({
                "type": "KIBPAY_REQUEST",
                "state": "KNET_FAILED",
                "language": "en",
                "errorText": "Problem occurred while processing direct debit.",
                "payeeName": "Sam Smith",
                "amount": "10.042",
                "currency": "KWD",
                "description": "Dinner and cinema"
            } as PaymentResponse);
        }
        else {
            return of({} as PaymentResponse);
        }
    }
}