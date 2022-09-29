import { ActoresDbService } from 'src/app/services/actores-db.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
@Output() actorSeleccionadoEvent = new EventEmitter<Actor>();

  actores: Actor[] = [];
  constructor(private db: ActoresDbService) { }

  ngOnInit(): void {
    this.db.get().subscribe((data) => {
      this.actores = [];
      this.actores = data;
    });
  }

   seleccionar(actor: Actor) {
    this.actorSeleccionadoEvent.emit(actor);
  }

}
