import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { homeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CargarComponent } from './cargar/cargar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    homeComponent,
    PerfilComponent,
    CargarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
