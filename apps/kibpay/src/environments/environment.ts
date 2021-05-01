import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';
import { Item, PortalContentMock } from '@backbase/foundation-ang/web-sdk';
import { ExternalServices } from '@backbase/foundation-ang/start';
import { Environment } from './type';
import { KibpayDataMocksProvider } from '@kibpay/widget-kibpay-data';
import { Provider } from '@angular/core';

const services: ExternalServices = {
  portalContent: () => new PortalContentMock()
};

/*const contentRef = PortalContentMock.addImageContent({
  logoImage: logoImage as ImageItem
})*/

const pageModel: Item = {
  name: 'app-container',
  properties: {},
  children: [
    {
      "name": "panel-container-0",
      "properties": {
        "classId": "PanelContainerComponent",
      },
      children: [
        {
          name: 'widget-kibpay',
          properties: {
            classId: 'WidgetKibpayComponent',
          }
        }
      ]
    }
  ],
};

export const environment: Environment = {
  production: false,
  mockProviders: [createMocksInterceptor(), KibpayDataMocksProvider] as Array<Provider>,
  //mockProviders: [createMocksInterceptor()],
  bootstrap: {
    pageModel,
    services,
  },
  assetsStaticItemName: ''
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
