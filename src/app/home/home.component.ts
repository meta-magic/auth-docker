import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";

/**
 * Created by pratik on 22/2/18.
 */
@Component({
selector:'home',
template:`
  <top-bar></top-bar>
  <amexio-row>
   <amexio-column  [size]="12"  style="padding-top: 68px;">
        <div class="route-container">
          <div class="route">
    <router-outlet></router-outlet>
</div>
</div>
</amexio-column>
</amexio-row>

 
`
})
export class HomeComponent{
  constructor(){
  }
}
