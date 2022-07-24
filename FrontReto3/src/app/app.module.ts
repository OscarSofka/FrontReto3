import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ChooseComponent } from './components/choose/choose.component';
import { PartidaCreadaComponent } from './components/partida-creada/partida-creada.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CrearPartidaComponent } from './components/crear-partida/crear-partida.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MesaIdcreadaComponent } from './components/mesa-idcreada/mesa-idcreada.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChooseComponent,
    PartidaCreadaComponent,
    CrearPartidaComponent,
    MesaIdcreadaComponent,
    RegistroComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot([]),
    AppRoutingModule,
    NgImageSliderModule,
    NgbModule,
    BrowserAnimationsModule,
    MatGridListModule,
    DragDropModule,
    MatPaginatorModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
