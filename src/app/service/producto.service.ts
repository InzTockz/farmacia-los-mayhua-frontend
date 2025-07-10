import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

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
      `${this.apiProducto}/registrar`, producto 
    )
  }
}
