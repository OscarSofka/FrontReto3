import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {
  constructor(private router: Router){}

        
        images = [
          "https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg",
          "https://c4.wallpaperflare.com/wallpaper/566/514/449/marvel-cinematic-universe-marvel-comics-iron-man-spider-man-wallpaper-preview.jpg"
        ];

  
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
