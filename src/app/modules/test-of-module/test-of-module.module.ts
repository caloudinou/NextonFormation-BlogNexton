/**
 * Angular dependencies
 */
import { NgModule } from '@angular/core';

/**
 * Components
 */
import { ExampleComponent } from './components/example/example.component';

/**
 * Services
 */

/**
 * Routes
 */

import { ROUTES_TEST_OF_MODULE } from './test-of-module.routes';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    ROUTES_TEST_OF_MODULE
  ],
  providers: []
})
export class TestOfModuleModule { }
