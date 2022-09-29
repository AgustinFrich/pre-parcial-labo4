import { ActorListadoComponent } from './components/actor/actor-listado/actor-listado.component';
import { PeliculaAltaComponent } from './components/peliculas/pelicula-alta/pelicula-alta.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: "busqueda", component: BusquedaComponent},
{path: "peliculas/alta", component: PeliculaAltaComponent},
{path: "actores/listado", component: ActorListadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
