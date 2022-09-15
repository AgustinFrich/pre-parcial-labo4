import { Pelicula } from './../clases/pelicula';
import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, onSnapshot, query} from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasDBService {
  constructor(private firestore: Firestore) { }
   
  getAll(): Observable<Pelicula[]> {
    const col = collection(this.firestore, "peliculas");
    return collectionData(col, {idField: "id"}) as Observable<Pelicula[]>;
  }


}
