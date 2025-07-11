import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrl: './gestion-productos.component.css'
})
export class GestionProductosComponent implements OnInit{

  productos!:Producto[]

  constructor(private productoService:ProductoService){}

  ngOnInit(): void {
    this.listado();
  }

  listado():void{
    this.productoService.listado().subscribe(
      response => this.productos = response
    );
  }

  eliminarProducto(idProducto:number):void{
    this.productoService.eliminar(idProducto).subscribe(
      () => {
        console.log('Producto eliminado')
        this.listado();
      }
    )
  }
}
