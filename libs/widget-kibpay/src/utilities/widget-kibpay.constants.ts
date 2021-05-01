export class AppConstants { 
    public static get ENVIRONMENT_URL(): string { return '/client-api/v1/kibpay/public/{publicIdPay}'; }
    public static get ACTIVE(): string { return 'ACTIVE'; }
    public static get KNET_CREATED(): string { return 'KNET_CREATED'; }
    public static get REJECTED(): string { return 'REJECTED'; }
    public static get CREDITED(): string { return 'CREDITED'; }
    public static get EXPIRED(): string { return 'EXPIRED'; }
    public static get KNET_FAILED(): string { return 'KNET_FAILED'; }
}