import { addDoc, collection } from '@firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActoresDbService {

  constructor(private fs: Firestore) { }

  add(nombre: string, pais: string) {
    const col = collection(this.fs, "actores");
    addDoc(col, {nombre: nombre, pais: pais});
  }
}
