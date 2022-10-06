import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ActorListadoComponent } from './components/actor/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { PeliculaAltaComponent } from './components/peliculas/pelicula-alta/pelicula-alta.component';
import { TablaPeliculaComponent } from './components/peliculas/tabla-pelicula/tabla-pelicula.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetallePeliculaComponent } from './components/peliculas/detalle-pelicula/detalle-pelicula.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { TablaPaisesComponent } from './components/paises/tabla-paises/tabla-paises.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FIREBASE_OPTIONS }from '@angular/fire/compat';
import { ActorPeliculaComponent } from './components/actor/actor-pelicula/actor-pelicula.component';
import { TablaPeliculaActorComponent } from './components/peliculas/tabla-pelicula-actor/tabla-pelicula-actor.component';
import { DetallePaisComponent } from './components/paises/detalle-pais/detalle-pais.component';
import { DetalleActorComponent } from './components/actor/detalle-actor/detalle-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    ActorListadoComponent,
    ActorAltaComponent,
    PeliculaAltaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    ActorPeliculaComponent,
    TablaPeliculaActorComponent,
    DetallePaisComponent,
    DetalleActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, ReactiveFormsModule,
    FormsModule, BrowserModule, HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: environment.firebase}, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
