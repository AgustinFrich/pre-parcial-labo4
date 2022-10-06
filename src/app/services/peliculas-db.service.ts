import { Pelicula } from './../clases/pelicula';
import { Injectable } from '@angular/core';
import { addDoc, collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { collection} from '@firebase/firestore';
import { finalize, Observable } from 'rxjs';
import { AngularFireStorage } from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class PeliculasDBService {
  constructor(private firestore: Firestore, private storage: AngularFireStorage) { }
   
  getAll(): Observable<Pelicula[]> {
    const col = collection(this.firestore, "peliculas");
    return collectionData(col, {idField: "id"}) as Observable<Pelicula[]>;
  }

  getFromActor(actor: string) {
    const co = collection(this.firestore, "peliculas");
   // const q = query(co, where(""))
  }

  guardar(pelicula: Pelicula, imagen: any) {

    const filePath = "peliculas/" + pelicula.nombre; 
    const storageRef = this.storage.ref(filePath);
    
    const subir = storageRef.put(imagen, {
       contentType: 'image/png'
      });

    subir.snapshotChanges()
    .pipe(
      finalize(() => {
          storageRef.getDownloadURL().subscribe((res) => {
          const fotoDeLaPelicula = res;
          const col = collection(this.firestore, "peliculas");
          pelicula.fotoDeLaPelicula = fotoDeLaPelicula;
          addDoc(col, pelicula.toObject());
        })
      })
    ).subscribe();
  }
}
