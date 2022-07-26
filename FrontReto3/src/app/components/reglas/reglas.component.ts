import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reglas',
  templateUrl: './reglas.component.html',
  styleUrls: ['./reglas.component.css']
})
export class ReglasComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  jugar(){
    this.router.navigate(['/select'])
  }

}
