import { Timestamp } from "@angular/fire/firestore";

export enum TIPOS {
    terror,
    comedia,
    amor,
    otros
}

export class Pelicula {
    id: string;
    nombre: string;
    tipo: TIPOS;
    fechaDeEstreno: Timestamp;
    cantidadDePublico: Number;
    fotoDeLaPelicula: string;
    actor: string;
    
    constructor(id: string, nombre: string, tipo: TIPOS, fechaDeEstreno: Timestamp, cantidadDePublico: Number = 0, actor: string, FotoDeLaPelicula : string = "") {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno
        this.cantidadDePublico = cantidadDePublico
        this.fotoDeLaPelicula = FotoDeLaPelicula;
        this.actor = actor
    }

    toObject() {
        return {
            id: this.id,
            nombre: this.nombre,
            tipo: this.tipo,
            fechaDeEstreno: this.fechaDeEstreno,
            cantidadDePublico: this.cantidadDePublico,
            fotoDeLaPelicula: this.fotoDeLaPelicula,
            actor: this.actor,
        }
    }
}
