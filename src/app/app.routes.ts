/**
 * Angular Route Dependencies
 */
import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

/**
 * Components
 */
import { AppOfTestComponent } from './components/app-of-test/app-of-test.component';

/**
 * Guards
 */
import { ActiveUserGuard } from "./common/guards/active-user.guard";

const routesParams: Routes = [
  {
    path : 'test',
    component: AppOfTestComponent
  },
  {
    path : 'github-nexton',
    component: AppOfTestComponent,
    canActivate: [ ActiveUserGuard ]
  },
  {
    path: 'example',
    loadChildren: 'app/modules/test-of-module/test-of-module.module#TestOfModuleModule'
  },
  /**
   * redirect (homePage)
   * RootUrl to The store Path
   */
  {
    path: '',
    redirectTo: '/test',
    pathMatch: 'full'

  },
  /**
   * other path (path not found)
   * redirect to the homePage
   */
  {
    path : '**',
    redirectTo: '/test'
  }

];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(routesParams);