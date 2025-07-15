import { Component, OnInit } from '@angular/core';
import { UsuarioResponse } from '../../model/usuario-response';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrl: './gestion-usuario.component.css'
})
export class GestionUsuarioComponent implements OnInit{

  usuarios!:UsuarioResponse[]
  
    constructor(private usuarioService:UsuarioService){}
  
    ngOnInit(): void {
      this.listado();
    }
  
    listado():void{
      this.usuarioService.listar().subscribe(
        data => this.usuarios = data
      )
    }
  
    eliminarUsuario(idUsuario:number):void{
      this.usuarioService.eliminar(idUsuario).subscribe(
        () => this.listado()
      )
    }

}
