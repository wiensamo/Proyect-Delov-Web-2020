import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { homeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CargarComponent } from './cargar/cargar.component';



const routes: Routes = [
{ path: 'Posters', component: homeComponent},
{path: 'Perfil', component :CargarComponent}

  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
