import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';
import { ProductoRequest } from '../model/producto-request';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiProducto:string = 'http://localhost:8080/api/v1/producto';

  constructor(private http:HttpClient) { }

  listado():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.apiProducto}/listado`);
  }

  registro(producto:FormData):Observable<Producto>{
    return this.http.post<Producto>(
      `${this.apiProducto}/registrar`, producto)
  }

  actualizar(idProducto:number, producto:FormData):Observable<Producto>{
    return this.http.put<Producto>(`${this.apiProducto}/actualizar/${idProducto}`, producto);
  }

  buscar(idProducto:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.apiProducto}/buscar/${idProducto}`)
  }

  eliminar(idProducto:number):Observable<void>{
    return this.http.delete<void>(`${this.apiProducto}/deshabilitar/${idProducto}`)
  }
  
}
