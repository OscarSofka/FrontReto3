import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-crear-partida',
  templateUrl: './crear-partida.component.html',
  styleUrls: ['./crear-partida.component.css']
})
export class CrearPartidaComponent {
  cantidad = 0;
  jugadores:string[]=[];
  email =! String;
  id='';
  idgenerado='';
  state !:boolean;
  jugador:any={};
  game: any={};
  
  
  constructor( 
    private router: Router,
    private activateReouted: ActivatedRoute,
    private webSocktet: WebsocketService
    ) { 
      this.activateReouted.params.subscribe(params =>{
        console.log(params);
        this.id = params['idMesa'] ;
      });
  }
  addJugador(){
    if(this.cantidad>=6){
      alert("no se pueden mas de 6 jugadores")
      this.cantidad= 6;
    }else{
      this.cantidad+=1
    }
    this.jugadores.length=this.cantidad;
  }
  minusJugador(){
    this.cantidad-=1
    this.jugadores.length = this.cantidad;
  }
  iniciarPartida(){    
      this.router.navigate(['/mesa', this.id])   
      
      this.game={
        gameId:this.id,
        playersId:this.jugador
      }
      console.log(this.game);
      
      this.webSocktet.post('http://localhost:8090/game/create',this.game).subscribe(res =>{
      console.log(res);
    })
  }
  correos(mail : String,i:number){
    if(mail == ''){
      alert("ingresa el correo completo")
    }else{
      this.jugador[i]=mail;
      console.log(this.jugador);
    }
  }
}
