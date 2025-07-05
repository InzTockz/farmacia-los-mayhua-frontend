import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogoProductosComponent } from './components/catalogo-productos/catalogo-productos.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoProductosComponent,
    GestionProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
