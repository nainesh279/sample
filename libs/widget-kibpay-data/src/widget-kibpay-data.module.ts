import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, Optional } from "@angular/core";
import { createServiceDataHttpConfig, DataHttpModule, ServiceDataHttpConfig, DATA_HTTP_CONFIG } from "@backbase/foundation-ang/data-http";
import { KibpayDataService, KIBPAY_DATA_CONFIG } from "./widget-kibpay-data.service";
export const CONFIG_VALUE = new InjectionToken("KibpayData Data Service :: Custom Http Config");

export function createKibpayDataServiceDataHttpConfig(
    globalConfig: ServiceDataHttpConfig,
    serviceConfig?: Partial<ServiceDataHttpConfig>) {
    return createServiceDataHttpConfig(globalConfig, serviceConfig ? serviceConfig : { "servicePath": "" });
}

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        DataHttpModule
    ],

    providers: [KibpayDataService, {
        provide: KIBPAY_DATA_CONFIG,
        useFactory: createKibpayDataServiceDataHttpConfig,
        deps: [DATA_HTTP_CONFIG, [new Optional(), CONFIG_VALUE]],
     }]
})

export class KibpayDataModule {
    static forRoot(config: Partial<ServiceDataHttpConfig>): ModuleWithProviders<KibpayDataModule> {
        return {
            ngModule: KibpayDataModule,
            providers: [
                {
                    provide: CONFIG_VALUE,
                    useValue: config,
                },
            ]
        };
    }
}
