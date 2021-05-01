import { Injectable } from '@angular/core';
import { AssetsService } from '@backbase/foundation-ang/core';

@Injectable()

export class WidgetKibpayAssetService {
    
    private readonly assetsResolver = this.assetsService.createAssetsResolver({
        widgetName: 'kp-widget-kibpay-ang',
        getURIFromAssetID: assetId => assetId
    });

    constructor(private assetsService: AssetsService) { }

    getAsset(assetId: string) {
        return this.assetsResolver(assetId);
    }
   
}