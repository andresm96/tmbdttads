import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { LoginComponent } from './header/login/login.component';
import { PeliculasDestacadasComponent } from './peliculas-destacadas/peliculas-destacadas.component';
import { ItemPeliculaComponent } from './peliculas-destacadas/item-pelicula/item-pelicula.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { ReviewComponent } from './review/review.component';



const appRoutes: Routes = [
  { path: 'resultado-busqueda/:query', component: BarraBusquedaComponent },
  { path: 'destacado', component: PeliculasDestacadasComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: '',
  redirectTo: '/destacado',
  pathMatch: 'full'
  }

];





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PeliculasDestacadasComponent,
    ItemPeliculaComponent,
    BarraBusquedaComponent,
    PeliculaComponent,
    CarrouselComponent,
    FooterComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
        )
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
