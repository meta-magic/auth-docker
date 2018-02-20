import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private route: Router,private http : HttpClient){
    this.http.get('assets/images/logos/amexio-logo.png')
      .subscribe(
        data=>{
          console.log(data);
        }
      )
  }

  ngOnInit(){

  }

  newProjectEventTesting(event:any){
    debugger;
    this.route.navigate(['create'])
  }
}
