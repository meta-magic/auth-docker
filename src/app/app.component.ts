import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from 'platform-commons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private route: Router,private http : HttpClient,private ls : LocalStorageService){

  }

  ngOnInit(){

  }

  newProjectEventTesting(event:any){
    debugger;
    this.route.navigate(['create'])
  }

  setData(){
    this.ls.set('proj_ms',{data : '1'});
  }
  getData(){
    console.log(this.ls.get('proj_ms'));
  }

}
