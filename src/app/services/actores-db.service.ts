import { Observable } from 'rxjs';
import { addDoc, collection } from '@firebase/firestore';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresDbService {

  constructor(private fs: Firestore) { }

  add(nombre: string, pais: any) {
    const col = collection(this.fs, "actores");
    addDoc(col, {nombre: nombre, pais: pais});
  }
  
  get() {
    const col = collection(this.fs, "actores");
    return collectionData(col, {idField: "id"}) as Observable<Actor[]>;
  }
}
