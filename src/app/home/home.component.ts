import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";

/**
 * Created by pratik on 22/2/18.
 */
@Component({
selector:'home',
template:`
  <top-bar></top-bar>
    <div class="route-container">

  <amexio-row>
<amexio-column [size]="12">

    <router-outlet></router-outlet>

</amexio-column>
</amexio-row>
 </div>
 
`
})
export class HomeComponent{
  constructor(){
  }
}
