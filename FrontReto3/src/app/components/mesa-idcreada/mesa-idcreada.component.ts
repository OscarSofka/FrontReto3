import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-mesa-idcreada',
  templateUrl: './mesa-idcreada.component.html',
  styleUrls: ['./mesa-idcreada.component.css']
})
export class MesaIdcreadaComponent  {

  cards = [
    {
      name:'a',
      exp: 1,
      imgUrl:''
    },
    {
      name:'b',
      exp: 2,
      imgUrl:''
    },
    {
      name:'c',
      exp: 3,
      imgUrl:''
    },
    {
      name:'d',
      exp: 4,
      imgUrl:''
    },
    {
      name:'e',
      exp: 5,
      imgUrl:''
    },

  ];
  Id='';
  data=this.authService.data();
  constructor(
    private activateReouted: ActivatedRoute,
    private authService: AuthFirebaseService
    ) { 

    this.activateReouted.params.subscribe(params =>{
      console.log(params);
      this.Id = params['idMesa'] ;
    });
  }
 

  showUser(){
    console.log(this.Id);
    this.authService.data().subscribe(res =>{  
      console.log(res?.displayName);
      console.log(res?.uid);
    });


  }


}
