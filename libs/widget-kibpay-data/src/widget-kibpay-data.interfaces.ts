export interface PaymentActions {
    type: string,
    state: string,
    language: string,
    redirectUrl?: string
}
export type PaymentAction = PaymentActions;

export interface PaymentItem {
    payeeName?: string,
    amount?: string,
    currency?: string,
    description?: string,
    errorText?: string
}
export interface PaymentIds {
    publicAcceptId?: string,
    publicRejectId?: string
}

export interface PaymentResponses extends PaymentItem, PaymentAction, PaymentIds {}

export type PaymentResponse = PaymentResponses;

export interface ErrorItem {
    status?: string;
    body?: string;
    code?: string;
}