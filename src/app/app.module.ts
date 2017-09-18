/**
 * Angular dependencies
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Components
 */
import { AppRootComponent } from './components/app-root/app-root.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppOfTestComponent } from './components/app-of-test/app-of-test.component';
/**
 * Services
 */

/**
 * Pipes
 */

/**
 * Directive
 */


/**
 * Routes
 */

import { ROUTES } from './app.routes';

/**
 * Guards
 */
import { ActiveUserGuard } from './common/guards/active-user.guard';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { NextonLogoComponent } from './components/common/nexton-logo/nexton-logo.component';
import { NextonMenuComponent } from './components/common/nexton-menu/nexton-menu.component';


@NgModule({
  declarations: [
    AppMainComponent,
    AppRootComponent,
    AppOfTestComponent,
    AppHeaderComponent,
    NextonLogoComponent,
    NextonMenuComponent
  ],
  imports: [
    BrowserModule,
    ROUTES
  ],
  providers: [
    ActiveUserGuard
  ],
  bootstrap: [AppMainComponent]
})
export class AppModule { }
