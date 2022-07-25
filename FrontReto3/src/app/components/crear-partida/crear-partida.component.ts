import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-partida',
  templateUrl: './crear-partida.component.html',
  styleUrls: ['./crear-partida.component.css']
})
export class CrearPartidaComponent implements OnInit {
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

  ngOnInit(): void {
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
  }
  correos(mail : String){
   
    if(mail == ''){
      alert("ingresa el correo completo")
    }else{
      this.state = !this.state;
      this.jugadoresSet.add(mail);
      console.log(mail);
    }
    
  }
}
