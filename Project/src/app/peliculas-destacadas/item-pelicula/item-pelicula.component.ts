import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-item-pelicula',
  templateUrl: './item-pelicula.component.html',
  styleUrls: ['./item-pelicula.component.css']
})
export class ItemPeliculaComponent implements OnInit {
  image: string;
  title: string;
  overview: string;

  constructor(image: string, title: string, overview: string) {
     this.image = image;
     this.title = title;
     this.overview = overview;
  }

  ngOnInit() {
  }

}
