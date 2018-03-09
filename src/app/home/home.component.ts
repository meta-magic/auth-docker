import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";

/**
 * Created by pratik on 22/2/18.
 */
@Component({
selector:'home',
template:`
  <top-bar></top-bar>
  <div style="padding-top: 15px;">
    <router-outlet></router-outlet>
  </div>
 
`
})
export class HomeComponent{
  constructor(){
  }
}
