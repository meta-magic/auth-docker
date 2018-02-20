import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { TopBarComponent } from './topbar.component';
import {PlatformCommmonsModule} from "platform-commons";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    AmexioWidgetModule,
    FormsModule,
    PlatformCommmonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
