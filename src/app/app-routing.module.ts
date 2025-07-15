import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { HomeComponent } from './components/home/home.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { AppComponent } from './app.component';
import { CatalogoProductosComponent } from './components/catalogo-productos/catalogo-productos.component';

const routes: Routes = [
  {path: 'gestion', component: GestionProductosComponent},
  {path: 'gestion/registro', component: RegistroProductoComponent},
  {path: 'actualizar/:idProducto', component: ActualizarProductoComponent},
  {path: 'catalogo', component: CatalogoProductosComponent}
  //{path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
