import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-mesa-idcreada',
  templateUrl: './mesa-idcreada.component.html',
  styleUrls: ['./mesa-idcreada.component.css']
})
export class MesaIdcreadaComponent  {

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
    });


  }


}
