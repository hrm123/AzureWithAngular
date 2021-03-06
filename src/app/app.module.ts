import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import environment from '../environments/environment';
import { LayoutDynamicComponent } from './nav/layout-dynamic/layout-dynamic.component';
import { HeaderDesktopComponent } from './nav/header-desktop/header-desktop.component';
import { HeaderDirective } from './nav/header.directive';
import { HeaderMobileComponent } from './nav/header-mobile/header-mobile.component';

@NgModule({
  declarations: [AppComponent, LayoutDynamicComponent, HeaderDesktopComponent, HeaderDirective, HeaderMobileComponent],
  imports: [ BrowserModule, BrowserAnimationsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  bootstrap: [AppComponent]
})
export class AppModule {}
