import { Component, OnInit } from '@angular/core';
import {usuario} from '../Modils/Usuario.model';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component .html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {

  ListaUsuarios =[];
  IdUsuario : number;
  Pasword : string;

  constructor() { }

  ngOnInit(): void {
  }

  buscarUsuario(){
    var founduser = this.ListaUsuarios.find(element => element.IdUsuario===this.IdUsuario);
    //si  se trae el usuario de la base de dato no nececito  el  contructor que tengo  en la clase Usuario.model.ts
    var user = new usuario();
    user.IdUsuario = this.IdUsuario
    console.log(founduser);
  }
  buscarPasword(){
    var foundpasw = this.ListaUsuarios.find(element => element.Pasword===this.Pasword);
    var pasw = new usuario();
    pasw.Pasword = this.Pasword
    console.log(foundpasw);
  }
}

