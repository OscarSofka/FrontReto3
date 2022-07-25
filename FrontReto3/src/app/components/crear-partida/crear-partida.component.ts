import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-partida',
  templateUrl: './crear-partida.component.html',
  styleUrls: ['./crear-partida.component.css']
})
export class CrearPartidaComponent {
  cantidad = 0;
  jugadores=[];
  email =! String;
  jugadoresSet = new Set();
  id='';
  state !:boolean;
  
  
  constructor( 
    private router: Router,
    private activateReouted: ActivatedRoute
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
    if (this.jugadoresSet===null) {
      alert("añade a los jugadores");
    }else{
      this.router.navigate(['/mesa', this.id])   
      console.log(this.jugadoresSet);
    }
  }
  correos(mail : String){
    if(mail == ''){
      alert("ingresa el correo completo")
    }else{
      this.jugadoresSet.add(mail);
      console.log(mail);
    }
  }
}
