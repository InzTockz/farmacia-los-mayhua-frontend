import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioResponse } from '../model/usuario-response';
import { UsuarioRequest } from '../model/usuario-request';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUsuario:string = "http://localhost:8080/api/v1/usuario";

  constructor(private http:HttpClient) { }
  
  listar():Observable<UsuarioResponse[]>{
    return this.http.get<UsuarioResponse[]>(`${this.apiUsuario}/listar`);
  }

  registrar(usuario:UsuarioRequest):Observable<UsuarioResponse>{
    return this.http.post<UsuarioResponse>(`${this.apiUsuario}/registrar`, usuario);
  }

  buscar(idUsuario:number):Observable<UsuarioResponse>{
    return this.http.get<UsuarioResponse>(`${this.apiUsuario}/buscar/${idUsuario}`);
  }

  actualizar(idUsuario:number, usuario:UsuarioRequest):Observable<UsuarioResponse>{
    return this.http.put<UsuarioResponse>(`${this.apiUsuario}/actualizar/${idUsuario}`, usuario);
  }

  eliminar(idUsuario:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUsuario}/eliminar/${idUsuario}`);
  }
}
