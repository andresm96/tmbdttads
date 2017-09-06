import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-item-pelicula',
  templateUrl: './item-pelicula.component.html',
  styleUrls: ['./item-pelicula.component.css']
})
export class ItemPeliculaComponent implements OnInit {
  image: string;
  title: string;
  overview: string;
  @Input() movie;

  constructor() {
     }

  ngOnInit() {
  }

}
