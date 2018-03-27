import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import {CookieService} from 'platform-commons';
import { LocalStorageService } from 'platform-commons';
import {MessagingService} from 'platform-commons';

@Component({
  selector: 'top-bar',
  templateUrl : './topbar.component.html'
})
export class TopBarComponent implements OnInit{

  projectname : any;
  projectUUID:any;
  stopListening: Function;

  isExpandSideNav:boolean;
  menus: any[] =[];
  projectmenus:any[]=[];
  projectList:any;
  confirmdialogue:boolean;
  msgData:any[]=[];
    validationMsgArray: any = [];
  isValidateForm: boolean = false;
  projectSelectedFlag:boolean;
  getProjectName:any;
  constructor(private _route: Router,public msgService : MessagingService,private ls:LocalStorageService, private route: ActivatedRoute,private cookieService:CookieService, private renderer: Renderer2,private http:HttpClient){
    
   this.getAppMenus();
  //  this.setMenus(this.menus);
 
  this.getProjectName=this.getProjectData.bind(this);
    this.msgService.getMessage(this.getProjectName);
    this.getProjectDetails();
  
   }

okErrorBtnClick(){
      this.isValidateForm = false;
    this.validationMsgArray = [];

}
  //THIS IS USED FOR ROUTE THE ACTUAL MODULES
  nodeClick(data:any){
    if(data.routerLink){
      this._route.navigate[data.routerLink];
    }
  }

  ngOnInit(){
  }
  getAppMenus(){
   let appData:any;
    this.http.get('/api/ide/ApplicationMenu/findApplicationMenus').subscribe(
      response=>{
        appData=response;
      },
      error=>{
 this.validationMsgArray.push('Unable to connect to server');
            this.isValidateForm = true;
      },
      ()=>{

      this.setMenus(appData);
      }
    );
  }
  
  onNavLinkclick(data:any){
  }
   setMenus(appData: any) {
     this.menus =[];
     appData.response.forEach((opt: any)=>{
     if(!opt.isDisable){
      this.menus.push(opt);
     }
     });
   
    
  }
 
  externalLink(event:any){
    debugger;
    if(event.data.node.isProjectDependent){
      if(this.projectSelectedFlag){
        this._route.navigate([event.data.node.routerLink]);
      }else{
     this.msgData.push('Please select project ');
      }
    }
   if(!event.data.node.isProjectDependent && event.data.node.text!=="Logout" ){
     this._route.navigate([event.data.node.routerLink]);
    }
    if(event.data.node.text=="Logout"){
     
      this.logout();
    }
  }
  logout(){
    this.confirmdialogue=!this.confirmdialogue
  }
  checkStatus(data:any){
    let LogoutMsg:any
   if (data === 'ok') {
        let response: any;
      const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
      this.http.post('/api/auth/login/logout',headers).subscribe(res => {
        response = res;
      }, err => {
 this.validationMsgArray.push('Unable to connect to server');
            this.isValidateForm = true;      }, () => {
        if (response.success) {
           this._route.navigate(['login']);
            this.cookieService.delete('tokenid');
           
        }
 this.validationMsgArray.push(response.errorMessage);
            this.isValidateForm = true;      });

       }

  }
    

getProjectData(data:any){
  if(data.data.hasOwnProperty('projectId')){
     const projectId=data.data.projectId
     let projectdata: any;
    this.http.get('/api/project/project/selectProject?projectUUID=' + projectId)
      .subscribe(response => {
        projectdata = response;
    }, err => {
 this.validationMsgArray.push('Unable to connect to server');
            this.isValidateForm = true;    }, () => {
      if(projectdata.success){
       this.projectname=projectdata.response.projectName;
       this.projectSelectedFlag=true;
      }
    });
    }
  }
  getProjectDetails() {
    
    let projectDetails: any;
    this.http.get('/api/project/project/getProjectDetails').subscribe(
      response => {
        projectDetails = response;
      },
      error => {
        this.validationMsgArray.push('Unable to connect to server');
            this.isValidateForm = true;
      },
      () => {
        this.projectname = projectDetails.response.projectName;
        if(this.projectname){
          this.projectSelectedFlag=true;
        }

      }
    );
    
  }


}
