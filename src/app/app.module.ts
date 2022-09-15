import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ActorListadoComponent } from './components/actor/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { PeliculaAltaComponent } from './components/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/peliculas/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './components/peliculas/tabla-pelicula/tabla-pelicula.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetallePeliculaComponent } from './components/peliculas/detalle-pelicula/detalle-pelicula.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { TablaPaisesComponent } from './components/paises/tabla-paises/tabla-paises.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    ActorListadoComponent,
    ActorAltaComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, BrowserModule, HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
