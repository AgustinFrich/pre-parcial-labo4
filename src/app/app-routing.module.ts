import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/peliculas/pelicula-listado/pelicula-listado.component';
import { PeliculaAltaComponent } from './components/peliculas/pelicula-alta/pelicula-alta.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: "bienvenido", component: BienvenidoComponent},
{path: "busqueda", component: BusquedaComponent},
{path: "peliculas/listado", component: PeliculaListadoComponent},
{path: "actores/listado", component: ActorListadoComponent},
{path: "peliculas/alta", component: PeliculaAltaComponent},
{path: "actores/alta", component: ActorAltaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
