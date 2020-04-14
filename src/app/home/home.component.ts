import { Component, OnInit } from '@angular/core';
import {afiche} from '../Modils/Afiche.models';
import {feria} from '../Modils/Feria.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaAfiches =[];
  listaFerias =[];



  constructor() { }

  ngOnInit(): void {
  }

}
