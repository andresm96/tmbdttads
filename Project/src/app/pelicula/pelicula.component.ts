import { Component, OnInit } from '@angular/core';
import { Services } from '../../app/services';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
  providers: [Services]
})

export class PeliculaComponent implements OnInit {

 
  constructor(private services: Services) { }

  ngOnInit() {

      
  }
  
}
