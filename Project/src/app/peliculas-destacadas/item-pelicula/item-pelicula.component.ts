import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Services } from '../../../app/services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-item-pelicula',
  templateUrl: './item-pelicula.component.html',
  styleUrls: ['./item-pelicula.component.css'],
  providers: [Services]
})
export class ItemPeliculaComponent implements OnInit {
  image: string;
  title: string;
  overview: string;
  @Input() movie;

  constructor(private services: Services, private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
  }

  goMovie(id) {
    this.router.navigate(['/pelicula', id]);
  }

}
