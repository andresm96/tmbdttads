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
guest_session: any;




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

  getGuestSession(){
    let apiURL = this.firstPartUrl + "authentication/guest_session/new" + this.apiKey;
    return this.getData(apiURL);
  }

  postRating(score: any, guest_session_id: string, id: string) {
    let apiURL = this.firstPartUrl + "movie/" + id + "/rating" + "?guest_session_id=" + guest_session_id + this.apiKey;
    console.log(apiURL);

    var data = JSON.stringify({
      "value": score
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", apiURL);
    xhr.setRequestHeader("content-type", "application/json;charset=utf-8");
    xhr.send(data);    
  }

  
  rateMovie(id: string, score: any) {
    let apiURL;
    this.getGuestSession().subscribe(session =>
      this.postRating(score, session.guest_session_id, id)
    );
  }
}
