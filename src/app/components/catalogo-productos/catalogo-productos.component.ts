import { Component } from '@angular/core';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrl: './catalogo-productos.component.css'
})
export class CatalogoProductosComponent {

  productos!:Producto[]

  constructor(){}

  ngOnInit():void{

  }

  
}
