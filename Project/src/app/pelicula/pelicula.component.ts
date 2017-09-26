import { Component, OnInit, Input } from '@angular/core';
import { Services } from '../../app/services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
  providers: [Services]
})

export class PeliculaComponent implements OnInit {
  private movie: any;
  private reviews: any;
 
  constructor(private services: Services, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(id =>
       this.services.getMovieByID(id['id']).subscribe(data => this.movie = data) );

    this.route.params.subscribe(id => 
       this.services.getReviewsOfMovie(id['id']).subscribe(data =>this.reviews = data ));
  }

  rateMovie(score) {
    this.services.rateMovie(this.movie.id, score);
  }
}
