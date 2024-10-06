import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { mainComponent } from './main/main.component';
import { headerComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    mainComponent,
    headerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
