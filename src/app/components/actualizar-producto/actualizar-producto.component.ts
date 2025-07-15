import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductoRequest } from '../../model/producto-request';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-actualizar-producto',
  standalone: false,
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent implements OnInit {

  producto:Producto = new Producto();
  imagen!:File;

  constructor(private route:ActivatedRoute, private productoService:ProductoService, private router:Router){
  }

  ngOnInit(): void {
    this.buscarProducto();
  }

  guardarImagen(event:any):void{
    this.imagen = event.target.files[0];
  }

  buscarProducto():void{
    this.route.params.subscribe(
      data => {
        let id = data['idProducto'];
        console.log(id)

        this.productoService.buscar(id).subscribe(
          data => this.producto = data
        )
      }
    )
  }

  actualizarProducto():void{

    const formData = new FormData();

    formData.append('nombreProducto', this.producto.nombreProducto);
    formData.append('fechaFabricacion', this.producto.fechaFabricacion.toString());
    formData.append('fechaVencimiento', this.producto.fechaVencimiento.toString());
    formData.append('stock', this.producto.stock.toString());
    formData.append('precio', this.producto.precio.toString());
    formData.append('idCategoria', this.producto.idCategoria.toString());
    formData.append('idClasificacionProducto', this.producto.idClasificacionProducto.toString());
    formData.append('imagen', this.imagen);

    this.route.params.subscribe(
      data => {
        let idProducto = data['idProducto'];
        this.productoService.actualizar(idProducto, formData).subscribe(
          () => {
            console.log('Producto actualizado');
            this.router.navigate(['/gestion']);
          }
        )
      }
    )
  }

}
