/**
 * Created by: deepali arvind
 * Date: 12/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{
  loginModel:LoginModel;
 
  constructor(private http: HttpClient) {
    this.loginModel=new LoginModel();
       }
  onBlur_EmailId(eventData:any){} 
  input_EmailId(eventData:any){} 
  focus_EmailId(eventData:any){} 
  onBlur_Password(eventData:any){} 
  input_Password(eventData:any){} 
  focus_Password(eventData:any){} 
  onClick_register(eventData:any){} 
  onClick_login(eventData:any){} 
  ngOnInit(){
  }
 

   
}
export class LoginModel{
  EmailId: string;  Password: string; }
