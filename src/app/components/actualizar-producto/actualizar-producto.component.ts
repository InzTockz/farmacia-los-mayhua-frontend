import { Component } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductoRequest } from '../../model/producto-request';

@Component({
  selector: 'app-actualizar-producto',
  standalone: false,
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {

  producto!:ProductoRequest;
  imagen!:File;

  guardarImagen(event:any):void{
    this.imagen = event.target.files[0];
  }

}
