import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiURL = "https://api.themoviedb.org/3/search/movie?api_key=c6b85fa012fc0f0d2d5d548aa0080dd5&query=Lord+of+the+Rings:+the+fellowship";
  data: any = {};

  constructor(private http: Http) {
    console.log("Está funcionando monooooo");
    this.getMovies();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiURL)
      .map((res: Response) => res.json());
  }

  getMovies() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }
}
