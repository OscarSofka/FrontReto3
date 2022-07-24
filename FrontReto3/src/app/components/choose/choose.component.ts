import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {
  constructor(private router: Router){}

  images = [944, 121].map((n) => `https://picsum.photos/id/${n}/1900/620/?grayscale`);

  
  idMesa = '';
  idGenerado= this.idGenerator();
  
  partidaCreada(){
    console.log(this.idMesa);
    this.router.navigate(['/mesa',this.idMesa]);
  }
  crearPartida(){
    console.log(this.idGenerado);
    this.router.navigate(['/crearPartida',this.idGenerado]);
  }

  idGenerator(){
    const hoy = new Date();
    const fecha = hoy.getDate().toString() + hoy.getMonth().toString() + hoy.getFullYear().toString();
    const hora = hoy.getHours().toString() + hoy.getMinutes().toString() + hoy.getSeconds().toString(); 
    const fechaYHora = fecha+hora;
    const juegoId = fechaYHora;
    return juegoId;
  }





}
