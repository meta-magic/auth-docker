/**
 * Created by: deepali arvind
 * Date: 12/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'blankui',
  templateUrl: 'blankui.component.html'
})
export class BlankuiComponent implements OnInit{
  blankuiModel:BlankuiModel;
 
  constructor(private http: HttpClient) {
    this.blankuiModel=new BlankuiModel();
       }
  ngOnInit(){
  }
 

   
}
export class BlankuiModel{
 }
