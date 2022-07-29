import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-mesa-idcreada',
  templateUrl: './mesa-idcreada.component.html',
  styleUrls: ['./mesa-idcreada.component.css']
})
export class MesaIdcreadaComponent  {
  index !: number;
  posX!:boolean;
  posY!:boolean;
  playedCard1 !: boolean;
  playedCard2 !: boolean;
  playedCard3 !: boolean;
  playedCard4 !: boolean;
  playedCard5 !: boolean;

 
  inicio=0;
  final=5;
  Id='';
  i !:number;

  exp !: number
  url !: string

  cards: any=[]

  data=this.authService.data();
  result: any={}
  constructor(
    private activateReouted: ActivatedRoute,
    private authService: AuthFirebaseService,
    private webSocket: WebsocketService
    
    ) { 
    
      this.activateReouted.params.subscribe(params =>{
        this.Id = params['idMesa'] ;
      });
      this.allCards();
      this.handCards();
      this.imprimir();
    }
  imprimir(){
    let h = this.authService.data().subscribe(res=>{
      console.log(res);
    });
    
    
  }
  handCards(){
    this.i= Math.floor(Math.random() * (107 - 0) + 0);
    return this.i;  
  }

  allCards(){
    this.webSocket.getAllCards('http://localhost:8090/card/all').subscribe(res =>{
    this.result = res;      

    for(var e=0; e<5; e++){
      this.cards.push(this.result[this.handCards()]);      
    }
    })
  }
  
  showUser(){
    console.log(this.Id);
    this.authService.data().subscribe(res =>{  
      console.log(res?.displayName);
      console.log(res?.uid);
    });
  }
  siguiente(){
    if(this.final==30 && this.inicio==25)
    {
      this.final=5;
      this.inicio=0;
    }else{
      this.final+=5;
      this.inicio+=5;
    }   
  }

  onDragEnded(event: CdkDragEnd, i: number): void {
    this.index = i;
    if (this.index == 0) {
      console.log(event.source.getFreeDragPosition());
      if(event.source.getFreeDragPosition().x >= 380 && event.source.getFreeDragPosition().x <= 1290){
        if(event.source.getFreeDragPosition().y >=121 && event.source.getFreeDragPosition().y <= 414){
         this.posY = true  
        }
        this.posX= true
      }else{
        this.posX = false
        this.posY= false
      }
      if (this.posX == true && this.posY == true) {
        this.playedCard1 = true;
      }else{
        this.playedCard1 = false;
      }
      if(this.playedCard1 == true){
        if(this.final == 5){
          console.log(this.cards[0].exp); 
          this.authService.data().subscribe(res=>{
            console.log(res?.email);
          })
               
        }
        if(this.final == 10){
          console.log(this.cards[5].exp);
        }
        if(this.final == 15){
          console.log(this.cards[10].exp);
        }
        if(this.final == 20){
          console.log(this.cards[15].exp);
        }
        if(this.final == 25){
          console.log(this.cards[20].exp);
        }
        if(this.final == 30){
          console.log(this.cards[25].exp);
        }
      }
    }
    if (this.index == 1) {
      if(event.source.getFreeDragPosition().x >= 250 && event.source.getFreeDragPosition().x <= 880){
        if(event.source.getFreeDragPosition().y >=-25 && event.source.getFreeDragPosition().y <= 285){
         this.posY = true  
        }
        this.posX= true
      }else{
        this.posX = false
        this.posY= false
      }
      if (this.posX == true && this.posY == true) {
        this.playedCard2 = true;
      }else{
        this.playedCard2 = false;  
      }
      if(this.playedCard2 == true){
        if(this.final == 5){
          console.log(this.cards[1].exp);    
            
        }
        if(this.final == 10){
          console.log(this.cards[6].exp);
        }
        if(this.final == 15){
          console.log(this.cards[11].exp);
        }
        if(this.final == 20){
          console.log(this.cards[16].exp);
        }
        if(this.final == 25){
          console.log(this.cards[21].exp);
        }
        if(this.final == 30){
          console.log(this.cards[26].exp);
        }
      }
    }
    if (this.index == 2) {
      if(event.source.getFreeDragPosition().x >= 165 && event.source.getFreeDragPosition().x <= 590){
        if(event.source.getFreeDragPosition().y >=-165 && event.source.getFreeDragPosition().y <= 130){
         this.posY = true  
        }
        this.posX= true
      }else{
        this.posX = false
        this.posY= false
      }
      if (this.posX == true && this.posY == true) {
        this.playedCard3 = true;
      }else{
        this.playedCard3 = false;  
      }
      if(this.playedCard3 == true){
        if(this.final == 5){
          console.log(this.cards[2].exp);      
        }
        if(this.final == 10){
          console.log(this.cards[7].exp);
        }
        if(this.final == 15){
          console.log(this.cards[12].exp);
        }
        if(this.final == 20){
          console.log(this.cards[17].exp);
        }
        if(this.final == 25){
          console.log(this.cards[22].exp);
        }
        if(this.final == 30){
          console.log(this.cards[27].exp);
        }
      }
    }
    if (this.index == 3) {
      if(event.source.getFreeDragPosition().x >= 160 && event.source.getFreeDragPosition().x <= 586){
        if(event.source.getFreeDragPosition().y >=-280 && event.source.getFreeDragPosition().y <= 15){
         this.posY = true  
        }
        this.posX= true
      }else{
        this.posX = false
        this.posY= false
      }
      if (this.posX == true && this.posY == true) {
        this.playedCard4 = true;
      }else{
        this.playedCard4 = false;  
      }
      if(this.playedCard4 == true){
        if(this.final == 5){
          console.log(this.cards[3].exp);      
        }
        if(this.final == 10){
          console.log(this.cards[8].exp);
        }
        if(this.final == 15){
          console.log(this.cards[13].exp);
        }
        if(this.final == 20){
          console.log(this.cards[18].exp);
        }
        if(this.final == 25){
          console.log(this.cards[23].exp);
        }
        if(this.final == 30){
          console.log(this.cards[28].exp);
        }
      }
    }
    if (this.index == 4) {
      if(event.source.getFreeDragPosition().x >= 160 && event.source.getFreeDragPosition().x <= 590){
        if(event.source.getFreeDragPosition().y >= -395 && event.source.getFreeDragPosition().y <= -104){
         this.posY = true  
        }
        this.posX= true
      }else{
        this.posX = false
        this.posY= false
      }
      if (this.posX == true && this.posY == true) {
        this.playedCard5 = true
      }else{
        this.playedCard5 = false  
      }
      if(this.playedCard5 == true){
        if(this.final == 5){
          console.log(this.cards[4].exp);      
        }
        if(this.final == 10){
          console.log(this.cards[9].exp);
        }
        if(this.final == 15){
          console.log(this.cards[14].exp);
        }
        if(this.final == 20){
          console.log(this.cards[19].exp);
        }
        if(this.final == 25){
          console.log(this.cards[24].exp);
        }
        if(this.final == 30){
          console.log(this.cards[29].exp);
        }
      }
    }
  }


}
