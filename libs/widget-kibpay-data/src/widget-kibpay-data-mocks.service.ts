import { createMocks } from '@backbase/foundation-ang/data-http';
import { Provider } from '@angular/core';
import { KIBPAY_DATA_CONFIG } from './widget-kibpay-data.service';

const examples = [ 
    {
        "urlPattern": "/client-api/{version}/kibpay/public/{Id}",
        "method": "GET",
        "responses": [
            {
                "status": 200,
                "body": { 
                    "type": "KIBPAY_REQUEST",
                    "state": "ACTIVE",
                    "language": "en",
                    "payeeName": "Sam Smith",
                    "amount": "10.042",
                    "currency": "KWD",
                    "description": "Dinner and cinema",
                    "publicAcceptId": "k021ymcb1111111",
                    "publicRejectId": "k021ymcb2222222"
                },
                "type": "PaymentResponse"
            }
        ]
    },

    {
        "urlPattern": "/client-api/{version}/kibpay/public/{Id}?action=seen",
        "method": "PATCH",
        "responses": [
            {
                "status": 200,
                "body": { 
                    "type": "KIBPAY_REQUEST",
                    "state": "SEEN",
                    "language": "en"
                },
                "type": "PaymentAction"
            }
        ]
    },

    {
        "urlPattern": "/client-api/{version}/kibpay/public/{Id}?action=accept",
        "method": "PATCH",
        "responses": [
            {
                "status": 200,
                "body": { 
                    "type": "KIBPAY_REQUEST",
                    "state": "KNET_CREATED",
                    "language": "en",
                    "redirectUrl": "https://kpay.com.kw/payment/link/path?paymentId=1234"
                },
                "type": "PaymentAction"
            }
        ]
    },

    {
        "urlPattern": "/client-api/{version}/kibpay/public/{Id}?action=reject",
        "method": "PATCH",
        "responses": [
            {
                "status": 200,
                "body": { 
                    "type": "KIBPAY_REQUEST",
                    "state": "REJECTED",
                    "language": "en"
                },
                "type": "PaymentAction"
            }
        ]
    },

    {
        "urlPattern": "/client-api/{version}/kibpay/public/{Id}?action=success&encryptedKnetPayload={encryptedKnetPayload}",
        "method": "PATCH",
        "responses": [
            {
                "status": 200,
                "body": { 
                    "type": "KIBPAY_REQUEST",
                    "state": "CREDITED",
                    "language": "en",
                    "payeeName": "Sam Smith",
                    "amount": "10.042",
                    "currency": "KWD",
                    "description": "Dinner and cinema"
                },
                "type": "PaymentResponse"
            }
        ]
    },

    {
        "urlPattern": "/client-api/{version}/kibpay/public/{Id}?action=failure&encryptedKnetPayload={encryptedKnetPayload}",
        "method": "PATCH",
        "responses": [
            {
                "status": 200,
                "body": { 
                    "type": "KIBPAY_REQUEST",
                    "state": "KNET_FAILED",
                    "language": "en",
                    "errorText": "Problem occurred while processing direct debit.",
                    "payeeName": "Sam Smith",
                    "amount": "10.042",
                    "currency": "KWD",
                    "description": "Dinner and cinema"
                },
                "type": "PaymentResponse"
            }
        ]
    }
];

export const KibpayDataMocksProvider: Provider = createMocks(examples, KIBPAY_DATA_CONFIG);
