import { Timestamp } from "@angular/fire/firestore";

export enum TIPOS {
    terror,
    comedia,
    amor,
    otros
}

export class Pelicula {
    id: Number;
    nombre: string;
    tipo: TIPOS;
    fechaDeEstreno: Timestamp;
    cantidadDePublico: Number;
    fotoDeLaPelicula: string;

    constructor(id: Number, nombre: string, tipo: TIPOS, fechaDeEstreno: Timestamp, cantidadDePublico: Number = 0, FotoDeLaPelicula : string = "") {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno
        this.cantidadDePublico = cantidadDePublico
        this.fotoDeLaPelicula = FotoDeLaPelicula;
    }
}
