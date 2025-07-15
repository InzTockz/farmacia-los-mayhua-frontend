import { Component, OnInit } from '@angular/core';
import { UsuarioRequest } from '../../model/usuario-request';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrl: './registrar-usuario.component.css'
})
export class RegistrarUsuarioComponent implements OnInit{

  usuario:UsuarioRequest = new UsuarioRequest();

  constructor(private usuarioService:UsuarioService, private router:Router){}

  ngOnInit():void{

  }

  registrar():void{
    this.usuarioService.registrar(this.usuario).subscribe(
      () => this.router.navigate(['/usuarios'])
    )
  }
}
