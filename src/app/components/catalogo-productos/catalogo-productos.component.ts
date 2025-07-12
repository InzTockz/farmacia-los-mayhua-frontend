import { Component } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrl: './catalogo-productos.component.css'
})
export class CatalogoProductosComponent {

  productos!:Producto[]

  constructor(private productoService:ProductoService){}

  ngOnInit():void{
    this.listarProductos();
  }

  listarProductos():void{
    this.productoService.listado().subscribe(
      data => this.productos = data
    )
  }
  
}
