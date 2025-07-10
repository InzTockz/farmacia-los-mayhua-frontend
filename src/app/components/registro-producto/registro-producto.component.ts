import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-registro-producto',
  standalone: false,
  templateUrl: './registro-producto.component.html',
  styleUrl: './registro-producto.component.css'
})
export class RegistroProductoComponent implements OnInit {

  producto:Producto = new Producto();
  imagen!:File;

  constructor(private productoService:ProductoService){}

  ngOnInit(): void {
    
  }

  registrarProducto():void{

    const formData:FormData = new FormData();

    formData.append('nombreProducto', this.producto.nombreProducto);
    formData.append('fechaFabricacion', this.producto.fechaFabricacion.toISOString());
    formData.append('fehcaVencimiento', this.producto.fechaVencimiento.toISOString());
    formData.append('stock', this.producto.stock.toString());
    formData.append('precio', this.producto.precio.toString());
    formData.append('idCategoria', this.producto.idCategoria.toString());
    formData.append('idClasificacionProducto', this.producto.idClasificacionProducto.toString());
    formData.append('imagen', this.imagen);

    this.productoService.registro(formData).subscribe(
      () => console.log('Producto registrado')
    )
  }

}
