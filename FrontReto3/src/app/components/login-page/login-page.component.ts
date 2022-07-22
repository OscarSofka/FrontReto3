import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  usuario = {
    email:"",
    password:""
  }
  googleUser={}

  constructor(
    private authService: AuthFirebaseService,
    private router:Router
    ){

  }
  ingresar(){
    const{email,password}=this.usuario;
    this.authService.login(email,password).then (res =>{
      console.log(res);
      this.router.navigate(['/select']);
    })
  }
  ingresarGoogle(){
    const{email,password}=this.usuario;
    this.authService.loginGoogle(email,password).then (res =>{
      console.log(res);
      this.router.navigate(['/select']);
    })
  }
  logOut(){
    this.authService.logOut()
      .then(()=>{
      this.router.navigate(['/login'])
    })
  }


}
