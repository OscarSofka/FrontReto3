import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { canActivate , redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import { ChooseComponent } from "./components/choose/choose.component";
import { PartidaCreadaComponent } from "./components/partida-creada/partida-creada.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { MesaIdcreadaComponent } from "./components/mesa-idcreada/mesa-idcreada.component";
import { CrearPartidaComponent } from "./components/crear-partida/crear-partida.component";
import { AllCardsComponent } from "./components/all-cards/all-cards.component";
import { ReglasComponent } from "./components/reglas/reglas.component";
import { RegistroComponent } from "./components/registro/registro.component";

const routes: Routes=[
    {path:'', pathMatch:'full', redirectTo: '/login'},
    {path:'login', component:LoginPageComponent},
    {path:'select',component: ChooseComponent},
    {path:'partidaCreada', component:PartidaCreadaComponent},
    {path:'mesa/:idMesa',component: MesaIdcreadaComponent},
    {path:'crearPartida/:idMesa', component: CrearPartidaComponent},
    {path:'allCards', component: AllCardsComponent},
    {path:'reglas', component:ReglasComponent},
    {path:'registro', component:RegistroComponent}
    
];
@NgModule({
    imports:[RouterModule.forRoot(routes,{useHash:true})],
    exports:[RouterModule]
})
export class AppRoutingModule{}