import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { PeliculaAltaComponent } from './components/peliculas/pelicula-alta/pelicula-alta.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: "busqueda", component: BusquedaComponent},
{path: "peliculas/alta", component: PeliculaAltaComponent},
{path: "actores/alta", component: ActorAltaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
