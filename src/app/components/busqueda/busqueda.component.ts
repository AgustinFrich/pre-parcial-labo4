import { Pelicula } from './../../clases/pelicula';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  cambiarVista: boolean = true;
  detalle?: Pelicula = undefined;

  constructor() { }

  ngOnInit(): void {
  }
  
  CambiarVista() {
    this.cambiarVista = !this.cambiarVista;
  }

  MostrarDetalle(pelicula: Pelicula) {
    this.detalle = pelicula;
  }

}
