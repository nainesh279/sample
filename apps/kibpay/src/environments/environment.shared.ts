import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';
import { Environment } from './type';
import { KibpayDataMocksProvider } from '@kibpay/widget-kibpay-data';
import { Provider } from '@angular/core';

export const environment: Environment = {
  production: false,
  mockProviders: [createMocksInterceptor(), KibpayDataMocksProvider] as Array<Provider>,
  //mockProviders: [createMocksInterceptor()]
  assetsStaticItemName: 'kp-kibpay-ang'
};