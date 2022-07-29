import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment1, environment2 } from 'src/environments/environment';
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
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatPaginatorModule}  from '@angular/material/paginator';
import { AllCardsComponent } from './components/all-cards/all-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { ReglasComponent } from './components/reglas/reglas.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { CreditosComponent } from './components/creditos/creditos.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChooseComponent,
    PartidaCreadaComponent,
    CrearPartidaComponent,
    MesaIdcreadaComponent,
    RegistroComponent,
    NavbarComponent,
    AllCardsComponent,
    ReglasComponent,
    NotfoundComponent,
    CreditosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment1.firebaseConfig),
    provideFirebaseApp(()=>initializeApp(environment2.firebaseConfig)),
    provideAuth(()=>getAuth()),
    RouterModule.forRoot([]),
    AppRoutingModule,
    NgImageSliderModule,
    NgbModule,
    BrowserAnimationsModule,
    MatGridListModule,
    DragDropModule,
    MatPaginatorModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
