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




  constructor(private http: Http) {

  }

  getData(apiURL) {
 
    return this.http.get(apiURL)
      .map((res: Response) => res.json());
  }

  getPopular() {
    let apiURL = this.firstPartUrl + "movie/popular" + this.apiKey + "&page=1";
    return this.getData(apiURL); 
  }

  getMoviesByQuery(query: string) {
    let apiURL = this.firstPartUrl + "search/movie" + this.apiKey + "&query=" + query;
    return this.getData(apiURL);
  }

  getMovieByID(id: string){
    let apiURL = this.firstPartUrl + "movie/" + id + this.apiKey;
    return this.getData(apiURL);
  }

  getReviewsOfMovie(id: string){
    let apiURL = this.firstPartUrl + "movie/" + id + "/reviews" + this.apiKey;
    return this.getData(apiURL);
  }
}
