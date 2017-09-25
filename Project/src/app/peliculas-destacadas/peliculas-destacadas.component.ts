import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Services } from '../../app/services';

@Component({
  selector: 'app-peliculas-destacadas',
  templateUrl: './peliculas-destacadas.component.html',
  styleUrls: ['./peliculas-destacadas.component.css'],
  providers: [Services]
  
})
export class PeliculasDestacadasComponent implements OnInit {
  private PopularMovies;

  constructor(private services: Services) {

  }



  ngOnInit() {
    this.services.getPopular().subscribe(data => this.PopularMovies = data);
      
  }

}
