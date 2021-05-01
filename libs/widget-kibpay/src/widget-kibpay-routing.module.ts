import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KibpayPayerComponent } from './kibpay-payer/kibpay-payer.component';
import { KibpayErrorComponent } from './kibpay-error/kibpay-error.component';
import { KibpayKnetComponent } from './kibpay-knet/kibpay-knet.component';

const routes: Routes = [
  { path: 'pay', component: KibpayPayerComponent,
    data: {
      seo: {
        metaTags: [
          { property: 'og:site_name', content: 'YouTube' },
          { property: 'og:url', content: 'https://www.youtube.com/watch?v=wrLicPUsfTc&amp;list=PL7uSdb_U7Fu8XlgXvBUOXyOE2Z_1B-jt9&amp;index=1' },
          { property: 'og:title', content: 'Unit Testing Angular with Jasmine &amp; Karma  tutorial | Chapter 1 - Introduction' },
          { property: 'og:image', content: 'https://i.ytimg.com/vi/wrLicPUsfTc/hqdefault.jpg' },
          { property: 'og:image:width', content: '300' },
          { property: 'og:image:height', content: '300' },
          { proprety: 'og:description', content: 'This video is introduction to Unit testing the Angular application using Jasmine and Karma.It explains:1. What is Jasmine?2. What is Karma?Tutorial Angular U...' },
        ]
      }
    }
  },
  { path: 'direct', component: KibpayPayerComponent},
  { path: 'success', component: KibpayKnetComponent},
  { path: 'failure', component: KibpayKnetComponent},
  { path: 'error', component: KibpayErrorComponent},
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class KibpayAppRoutingModule { }