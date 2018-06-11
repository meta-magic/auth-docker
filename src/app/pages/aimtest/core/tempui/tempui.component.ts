/**
 * Created by: MetaMagic
 * Date: 11/06/2018
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
  onBlur_TextInput1(eventData:any){} 
  input_TextInput1(eventData:any){} 
  focus_TextInput1(eventData:any){} 
  onBlur_EmailId(eventData:any){} 
  input_EmailId(eventData:any){} 
  focus_EmailId(eventData:any){} 
  onSelection_CheckBox(eventData:any){} 
  onBlur_textInput2(eventData:any){} 
  input_textInput2(eventData:any){} 
  focus_textInput2(eventData:any){} 
  onBlur_Password(eventData:any){} 
  input_Password(eventData:any){} 
  focus_Password(eventData:any){} 
  onClick_SubmitBtn(eventData:any){} 
  ngOnInit(){
  }
 

   
}
export class TempuiModel{
  TextInput1: string;  EmailId: string;  CheckBox: string;  textInput2: string;  Password: string; }
