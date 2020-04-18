import { Component, OnInit } from '@angular/core';
import {afiche} from '../Modils/Afiche.models';
import {feria} from '../Modils/Feria.models';
import { Button } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {

   
  
  fila;
 
  flechaIzquierda;
  flechaDerecha;
  carru;
  numpos ;
  a=true;

  
 
  



  constructor() {

  
 this.flechaIzquierda = document.getElementById('flecha-izquierda');
 this.flechaDerecha = document.getElementById('flecha-derecha');

 
 
 
   }



//corre el carrusel hacia la derecha
  correrderecha(){
    
    document.querySelector('.contenedor-carrusel').scrollLeft += 500;

    this.numpos =document.querySelectorAll('.poster').length;
    console.log(this.numpos);
 
   
   }
   //corre el carrusel hacia la izquierda
   correrizquierda(){
    
    document.querySelector('.contenedor-carrusel').scrollLeft -= 500;
    

   }

   colocarindicadores(){
     if(this.a){
     var paginas = Math.ceil(document.querySelectorAll('.poster').length/5);
     for(let i=0;i<paginas;i++){
      var indicador=document.createElement('button');
      document.querySelector('.indicadores').appendChild(indicador);
     }
     this.a=false;
    }
   }


   hover(){
    document.querySelectorAll('.poster').forEach((poster)=>{
      poster.addEventListener('mouseenter',(e)=>{
        var elemento = e.currentTarget;
        setTimeout(()=>{
          document.querySelectorAll('.poster').forEach(poster => poster.classList.remove('.hover'));
          
        },300);
      });
    });
   }
   
   
  

  ngOnInit(): void {
  }

}
