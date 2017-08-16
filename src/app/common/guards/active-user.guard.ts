import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from "../../../environments/environment";

@Injectable()
export class ActiveUserGuard implements CanActivate {
  /**
   * Variable to know if user is connected or not connected
   * @type {boolean}
   */
  private active: undefined|boolean = false;
  /**
   * Variable useful to debug only
   * @type {any}
   */
  private controlRoute:any;

  /**
   * path name to redirect
   * @type {string}
   */
  private defaultURL: undefined|string = '/';


  constructor( private _Router: Router ) {}

  /**
   * canActivate verify that the url is authorized
   * to be visited by the user depending on the user active
   * @name canActivate
   * @param next
   * @param state
   * @returns {undefined|boolean}
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    /**
     * if user is not connected, he redirect to default url (defaultURL)
     */
    if (!this.active) {
      this._Router.navigate([this.defaultURL], {skipLocationChange: false}).then(
          (routeSuccess) => {
            this.controlRoute = routeSuccess;
            /**
             * log to debug only development environment
             */
            if (!environment.production) {
              console.info(`user not connected success to redirect to path => ${this.defaultURL} `, this.controlRoute);
            }
          },
          (routeError) => {
            this.controlRoute = routeError;
            /**
             * log to debug only development environment
             */
            if (!environment.production) {
              console.error(`user not connected error to redirect to path => ${this.defaultURL} `, this.controlRoute);
            }
          }
      );
    }
    return this.active;
  }

}
