import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { HomeComponent } from './components/home/home.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { AppComponent } from './app.component';
import { CatalogoProductosComponent } from './components/catalogo-productos/catalogo-productos.component';
import { GestionUsuarioComponent } from './components/gestion-usuario/gestion-usuario.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';

const routes: Routes = [
  {path: 'gestion', component: GestionProductosComponent},
  {path: 'gestion/registro', component: RegistroProductoComponent},
  {path: 'gestion/actualizar/:idProducto', component: ActualizarProductoComponent},
  {path: 'catalogo', component: CatalogoProductosComponent},
  {path: 'usuarios', component: GestionUsuarioComponent},
  {path: 'usuarios/registro', component: RegistrarUsuarioComponent},
  {path: 'usuarios/actualizar/:idUsuario', component: ActualizarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
