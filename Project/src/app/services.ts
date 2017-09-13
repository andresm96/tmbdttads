import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class Services {
private firstPartUrl = "https://api.themoviedb.org/3/";
private apiKey = "?api_key=c6b85fa012fc0f0d2d5d548aa0080dd5";

//esta apiurl ya no serviria pero por las dudas la dejo

//private apiURL = "https://api.themoviedb.org/3/movie/popular?api_key=c6b85fa012fc0f0d2d5d548aa0080dd5&page=1";
data: any = {};
private apiURL: string;



  constructor(private http: Http) {

  }

  getData() {
 
    return this.http.get(this.apiURL)
      .map((res: Response) => res.json());
  }

  getPopular() {
    this.apiURL = this.firstPartUrl + "movie/popular" + this.apiKey + "&page=1";
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }
  //ACA IRIAN LOS OTROS METODOS CAMBIANDO LA API URL
}
