import { Actor } from './../../../clases/actor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {
actor!: any;
  constructor() { }

  ngOnInit(): void {
    
  }

  actorSeleccionado($event: Actor) {
    console.log($event);
    this.actor = $event;
  }
}
