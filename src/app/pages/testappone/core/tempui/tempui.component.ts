/**
 * Created by: MetaMagic
 * Date: 08/06/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'tempui',
  templateUrl: 'tempui.component.html'
})
export class TempuiComponent implements OnInit{
  tempuiModel:TempuiModel;
 
  constructor(private http: HttpClient) {
    this.tempuiModel=new TempuiModel();
       }
  ngOnInit(){
  }
 

   
}
export class TempuiModel{
 }
