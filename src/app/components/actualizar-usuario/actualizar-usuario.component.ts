import { Component, OnInit } from '@angular/core';
import { UsuarioRequest } from '../../model/usuario-request';
import { UsuarioService } from '../../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrl: './actualizar-usuario.component.css'
})
export class ActualizarUsuarioComponent implements OnInit{

  usuario:UsuarioRequest = new UsuarioRequest();
  
    constructor(private usuarioService:UsuarioService, private router:Router, private route:ActivatedRoute){}
  
    ngOnInit():void{
      this.buscarProducto();
    }

    buscarProducto():void{
      this.route.params.subscribe(
        data => {
          let idUsuario = data['idUsuario'];

          this.usuarioService.buscar(idUsuario).subscribe(
            data => this.usuario = data
          )
        }
      )
    }
  
    actualizar():void{
      this.route.params.subscribe(
        data => {
          let idUsuario = data['idUsuario'];
          this.usuarioService.actualizar(idUsuario, this.usuario).subscribe(
            () => this.router.navigate(['/usuarios'])
          )
        }
      )
    }
}
