import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-bar',
  templateUrl : './topbar.component.html'
})
export class TopBarComponent implements OnInit{

  projectname : string;

  stopListening: Function;

  constructor(private route: Router, private renderer: Renderer2){
    this.stopListening =
    renderer.listen('window', 'message', this.handleMessage.bind(this));

  }

  ngOnInit(){

  }

  handleMessage(event: Event) {
    let message = event as MessageEvent;
    let messagePayLoad = message.data;
    console.log(messagePayLoad);
    // let msgPayLoadObj = messagePayLoad != null ? JSON.parse(messagePayLoad) : null;
    // if(msgPayLoadObj != null && msgPayLoadObj.hasOwnProperty('ms_id')){
    //   console.log(msgPayLoadObj);
    //   console.log(JSON.parse(msgPayLoadObj));
    // }
   /* if(message.data && message.data !=undefined){
      let messagePayload = JSON.parse(message.data);

      if(messagePayload.ms_id == "project_ms")
      {
        this.projectname =  messagePayload.data.name;
        console.log(messagePayload);
      }

    }*/
  }

}
