import { PeliculasDBService } from './../../../services/peliculas-db.service';
import { Pelicula, TIPOS } from './../../../clases/pelicula';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  peliculas: Pelicula[] = [];
  @Input() tabla: boolean = true;
  @Output() mostarPelicula = new EventEmitter<Pelicula>();

  constructor(private db: PeliculasDBService) { }

  ngOnInit(): void {
    this.db.getAll().subscribe((data) => {
      data.forEach((pelicula) => {
        if(!this.peliculas.includes(pelicula))
          this.peliculas.push(pelicula);
      })
    });
  }
  
  public get Tipos(): typeof TIPOS {
    return TIPOS; 
  }

  mostrarDetalle(item: Pelicula) {
    this.mostarPelicula.emit(item);
  } 
}
