import { Component, OnInit } from '@angular/core';
import { ActoresDbService } from 'src/app/services/actores-db.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  nombre: string = "";
  pais: any;
  error: string = "";
  
  constructor(private actoresDB: ActoresDbService) { }

  ngOnInit(): void {
  }

  paisSeleccionado(pais: any) {
    this.pais = pais;
  }

  guardar() {
    if(this.nombre === "") {
      this.error = "Escriba el nombre";
      return;
    }
    if(this.pais == "") {
      this.error = "Seleccione un pais";
      return;
    }
    this.error = "";
    this.actoresDB.add(this.nombre, this.pais);

  }

}

