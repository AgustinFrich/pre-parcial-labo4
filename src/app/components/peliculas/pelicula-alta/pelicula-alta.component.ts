import { Actor } from 'src/app/clases/actor';
import { TIPOS } from './../../../clases/pelicula';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Timestamp } from '@angular/fire/firestore';
import { PeliculasDBService } from 'src/app/services/peliculas-db.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  pelicula: Pelicula = new Pelicula("", "", TIPOS.otros, Timestamp.fromDate(new Date(Date.now())), 0, "", "");
  imagen?: File;
  fechaDeEstreno: string = "";
  public tipos = Object.values(this.Tipos).filter(value => typeof value !== 'number');
public forma!: FormGroup;

  constructor(private db: PeliculasDBService, public fb: FormBuilder) {   }
 
  ngOnInit(): void {
    this.forma = this.fb.group({
      "nombre": ['', [Validators.required]],
      "tipo": ['', [Validators.required, Validators.minLength(1)]],
      "fecha": ['', [Validators.required]],
      "publico": ['', [Validators.required, Validators.min(1)]],
      "actor": ['', [Validators.required]],
      "imagen": ['', Validators.required]
    });
  }

  guardar() {
    this.pelicula.fechaDeEstreno = Timestamp.fromDate(new Date(this.fechaDeEstreno));
    console.log(this.pelicula.fechaDeEstreno);
    console.log(typeof this.imagen);
    if(this.imagen !== undefined) {
      this.db.guardar(this.pelicula, this.imagen);
    }
  }

  actorSeleccionado($event: Actor) {
    this.pelicula.actor = $event.nombre;
  }
  
  public get Tipos(): typeof TIPOS {
    return TIPOS; 
  }

  onFileSelected($event: any) {
 if($event.target.files.length > 0) 
  {
    this.imagen = $event.target.files[0];
  }
}

selectChange(event: any) {
    let idx = event.target.value;
    console.log('id:', idx);
    this.forma.controls['tipo'].clearValidators();

    if (idx == 0) {
      this.forma.controls['tipo'].setValidators([
        Validators.required,
      ]);
    }
    this.forma.updateValueAndValidity();
}
}
