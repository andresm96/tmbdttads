import { Component, OnInit, Input } from '@angular/core';
import { Services } from '../../app/services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css'],
  providers: [Services]
})
export class BarraBusquedaComponent implements OnInit {
  @Input() movie;
  private QueryResults;

  constructor(private services: Services, private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.route.params.subscribe(
      query => this.services.getMoviesByQuery(query['query']).subscribe(
        data => this.QueryResults = data
      ));
      
  }

  onSearch(value){
    this.router.navigate(['/resultado-busqueda', value]);
  }
/*
  getMoviesByQuery(query) {
    this.services.getMoviesByQuery(query);
  }
*/
}
