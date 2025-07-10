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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoProductosComponent,
    GestionProductosComponent,
    RegistroProductoComponent,
    ActualizarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
