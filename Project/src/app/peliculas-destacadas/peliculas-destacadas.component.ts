import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-peliculas-destacadas',
  templateUrl: './peliculas-destacadas.component.html',
  styleUrls: ['./peliculas-destacadas.component.css']
})
export class PeliculasDestacadasComponent implements OnInit {
  private apiURL = "https://api.themoviedb.org/3/movie/popular?api_key=c6b85fa012fc0f0d2d5d548aa0080dd5&page=1";
  data: any = {};

  constructor(private http: Http) {
    this.getPopular();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiURL)
    .map((res: Response) => res.json());
  }

  getPopular() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  ngOnInit() {
  }

}
