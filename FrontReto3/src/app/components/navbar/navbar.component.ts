import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthFirebaseService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logOut()
    .then(()=>this.router.navigate(['/login']))
  }
}
