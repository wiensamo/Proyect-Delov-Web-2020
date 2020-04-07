import { Component, OnInit } from '@angular/core';
import {usuario} from '../Modils/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ListaUsuarios =[];
  IdUsuario : string;
  Pasword : string;

  constructor() { }

  ngOnInit(): void {
  }

  buscarUsuario(){
    var founduser = this.ListaUsuarios.find(element => element.IdUsuario===this.IdUsuario);
    var user = new usuario();
    user.IdUsuario = this.IdUsuario
    console.log(founduser);
  }
  buscarPasword(){
    var foundpasw = this.ListaUsuarios.find(element => element.Pasword===this.Pasword);
    var pasw = new usuario();
    pasw.twet = this.Pasword
    console.log(foundpasw);
  }
}

