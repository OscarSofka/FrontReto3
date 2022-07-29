import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario = {
    email:"",
    password:""
  }

  constructor(
    private authService: AuthFirebaseService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  registro(){
    const{email,password}=this.usuario;
      this.authService.register(email,password).then (res =>{
      console.log(res);
      this.router.navigate(['/select']);
    })
  }
  home(){
    this.router.navigate(['/login']);
  }

}
