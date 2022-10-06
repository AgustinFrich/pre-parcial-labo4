import { Actor } from 'src/app/clases/actor';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula-actor',
  templateUrl: './tabla-pelicula-actor.component.html',
  styleUrls: ['./tabla-pelicula-actor.component.css']
})
export class TablaPeliculaActorComponent implements OnInit {
  @Input() actor!: Actor;

  constructor() { }

  ngOnInit(): void {
  }

}
