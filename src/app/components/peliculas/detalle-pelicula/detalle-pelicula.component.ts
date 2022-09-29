import { Timestamp } from '@angular/fire/firestore';
import { Pelicula, TIPOS } from './../../../clases/pelicula';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  @Input() pelicula?: Pelicula;
  constructor() { }

  ngOnInit(): void {
    
  }
}
