import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRootComponent } from './components/app-root/app-root.component';

@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
