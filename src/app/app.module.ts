import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogoProductosComponent } from './components/catalogo-productos/catalogo-productos.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { GestionUsuarioComponent } from './components/gestion-usuario/gestion-usuario.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoProductosComponent,
    GestionProductosComponent,
    RegistroProductoComponent,
    ActualizarProductoComponent,
    GestionUsuarioComponent,
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
