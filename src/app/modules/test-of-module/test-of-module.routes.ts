/**
 * Angular Route Dependencies
 */
import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


/**
 * Components
 */
import {ExampleComponent} from "./components/example/example.component";


const routesTestOfModuleParams: Routes = [
  {
    path : '',
    component: ExampleComponent
  }

];

export const ROUTES_TEST_OF_MODULE: ModuleWithProviders = RouterModule.forChild(routesTestOfModuleParams);