import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent{
  result: any=[];
  inicio=0;
  final=4
  constructor(
    private webSocktet: WebsocketService
  ) { 
    this.allCards();
  }

  allCards(){
    this.webSocktet.getAllCards('http://localhost:8090/card/all').subscribe(res =>{
    this.result = res;  
    console.log(this.result );
    })
  }
  siguiente(){
    console.log(this.final);
    
    if(this.final>84)
    {
      this.final=4;
      this.inicio=0;
    }else{
      this.final+=4;
      this.inicio+=4;
    }   
  }

}
