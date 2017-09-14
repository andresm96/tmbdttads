import { Component, OnInit, Input } from '@angular/core';
import { Services } from '../../app/services';


@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css'],
  providers: [Services]
})
export class BarraBusquedaComponent implements OnInit {
  @Input() movie;


  constructor(private services: Services) { }

  ngOnInit() {
  }

  getMoviesByQuery(query) {
    this.services.getMoviesByQuery(query);
  }

}
