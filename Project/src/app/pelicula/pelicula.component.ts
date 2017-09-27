import { Component, OnInit, Input } from '@angular/core';
import { Services } from '../../app/services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/util/isNumeric';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
  providers: [Services]
})

export class PeliculaComponent implements OnInit {
  private movie: any;
  private reviews: any;
  private error: number;
 
  constructor(private services: Services, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(id =>
       this.services.getMovieByID(id['id']).subscribe(data => this.movie = data) );

    this.route.params.subscribe(id => 
       this.services.getReviewsOfMovie(id['id']).subscribe(data =>this.reviews = data ));
  }

  voteMovie(score: number) {

    this.error=0;

    if (score <= 10 && score >= 1) {
      this.services.submitVote(this.movie.id, score);
    }
    else this.error = 1;
  }
}
