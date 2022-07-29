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
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { CreditosComponent } from "./components/creditos/creditos.component";

const routes: Routes=[
    {path:'', pathMatch:'full', redirectTo: '/login'},
    {path:'login', component:LoginPageComponent},
    {path:'select',component: ChooseComponent, ...canActivate(()=>  redirectUnauthorizedTo(['/login']))},
    {path:'partidaCreada', component:PartidaCreadaComponent, ...canActivate(()=>  redirectUnauthorizedTo(['/login']))},
    {path:'mesa/:idMesa',component: MesaIdcreadaComponent, ...canActivate(()=>  redirectUnauthorizedTo(['/login']))},
    {path:'crearPartida/:idMesa', component: CrearPartidaComponent, ...canActivate(()=>  redirectUnauthorizedTo(['/login']))},
    {path:'allCards', component: AllCardsComponent, ...canActivate(()=>  redirectUnauthorizedTo(['/login']))},
    {path:'reglas', component:ReglasComponent, ...canActivate(()=>  redirectUnauthorizedTo(['/login']))},
    {path:'registro', component:RegistroComponent},
    {path:'creditos',component:CreditosComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
    {path:'**', component:NotfoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes,{useHash:true})],
    exports:[RouterModule]
})

export class AppRoutingModule{}