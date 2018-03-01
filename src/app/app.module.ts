import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import {PlatformCommmonsModule} from "platform-commons";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRouting,
    PlatformCommmonsModule,
    AmexioWidgetModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
