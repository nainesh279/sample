import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContainersModule } from '@backbase/universal-ang/containers';
import { LayoutContainerModule } from '@backbase/universal-ang/layouts';
import { ContentWidgetModule } from '@backbase/universal-ang/content';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { WidgetKibpayModule } from '@kibpay/widget-kibpay';
import { WebSdkApiModule } from '@backbase/foundation-ang/web-sdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule.forRoot({
      assets: {
        assetsStaticItemName: environment.assetsStaticItemName,
      }
    }),
    RouterModule.forRoot([], { initialNavigation: false, useHash: false }),
    ContainersModule,
    LayoutContainerModule,
    ContentWidgetModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    WidgetKibpayModule,
    WebSdkApiModule
  ],
  providers: [
    ...environment.mockProviders || [],
    {provide: APP_BASE_HREF, useValue: '/kibpay'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
