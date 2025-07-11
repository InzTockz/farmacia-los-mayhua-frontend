import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cambiarPestana:boolean = true;

  constructor(){}

  ngOnInit():void{

  }

  cambiarEstado(estado:boolean):void{
    this.cambiarPestana = estado;
  }
}
