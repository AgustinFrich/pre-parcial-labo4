import { PaisesApiService } from './../../../services/paises-api.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Output() paisSeleccionadoEvent = new EventEmitter<string>();

  all: any[] | null = null;
  paises: any[] = [];
  indice = 0;

  constructor(private apiPaises: PaisesApiService) { }

  ngOnInit(): void {
    this.apiPaises.getPaises().subscribe((paises) => {
      this.all = paises;
      this.actualizar();
    })
  }

  seleccionar(pais: any) {
    this.paisSeleccionadoEvent.emit(pais);
  }

  proxima() {
    if(this.all !== null) {
      if(this.indice * 8 + 8 < this.all?.length)
        this.indice++;
        this.actualizar()
    }
  }
  
  anterior() {
    if(this.indice !== 0)
      this.indice--;
      this.actualizar();
    }

  actualizar() {
    if(this.paises !== null && this.all !== null) {
      this.paises = [];
      for (let i = this.indice * 8 ; i < this.indice * 8 + 8; i++) {
        this.paises.push(this.all[i]);
      }
    }
  }
}
