import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { canActivate , redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import { ChooseComponent } from "./components/choose/choose.component";
import { PartidaCreadaComponent } from "./components/partida-creada/partida-creada.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { MesaIdcreadaComponent } from "./components/mesa-idcreada/mesa-idcreada.component";

const routes: Routes=[
    {path:'', pathMatch:'full', redirectTo: '/login'},
    {path:'login', component:LoginPageComponent},
    {path:'select',component: ChooseComponent},
    {path:'partidaCreada', component:PartidaCreadaComponent},
    {path:'mesa/:idMesa',component: MesaIdcreadaComponent}
    
];
@NgModule({
    imports:[RouterModule.forRoot(routes,{useHash:true})],
    exports:[RouterModule]
})
export class AppRoutingModule{}