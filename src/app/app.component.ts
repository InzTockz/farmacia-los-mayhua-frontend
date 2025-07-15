import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  cambiarPestana: boolean = true;
  selectTable: boolean = true;
  selectRegistro: boolean = true;
  selectUpdate: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    initFlowbite();
    this.router.navigate(['/catalogo']);
  }

  cambiarEstado(estado: boolean): void {
    this.cambiarPestana = estado;
  }
}
