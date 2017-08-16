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


@NgModule({
  declarations: [
    AppMainComponent,
    AppRootComponent,
    AppOfTestComponent
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
