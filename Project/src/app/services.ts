import { Component, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class Services {
private firstPartUrl = "https://api.themoviedb.org/3/";
private apiKey = "?api_key=c6b85fa012fc0f0d2d5d548aa0080dd5";
private guest_session_id = "3a8ddd82f848ae1fe15eab0a8754937d";

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

  getGuestSession(){
    let apiURL = this.firstPartUrl + "authentication/guest_session/new" + this.apiKey;
    return this.getData(apiURL);
  }

  getRequestToken(){
    let apiURL = this.firstPartUrl + "authentication/token/new" + this.apiKey;
    return this.getData(apiURL);
  }

  postSendVote(guest_session: any, score:number, id:string) {
    
    // console.log("Guest Session: " + guest_session);

    let apiURL = this.firstPartUrl + "movie/" + id + "/rating" + this.apiKey + "&guest_session_id=" + guest_session;

    // console.log("Api: " + apiURL);

    const body = { value: score };
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json;charset=utf-8');

    return this.http.post(apiURL, body, { headers: headers }).subscribe((res) => res.json());
  }

  submitVote(id: string, score: number) {

    return this.getGuestSession().subscribe(
      (session) => this.postSendVote(session.guest_session_id, score, id)
    );
  }

  validate(request_token: any,user: String, password: String){
    let apiURL = this.firstPartUrl + "authentication/token/validate_with_login" + this.apiKey + "&username=" + user + "&password=" + password + "&request_token=" + request_token + "?redirect_to=http://localhost:4200/destacado";
  }

  authentication(user: String, password: String){
    
    return this.getRequestToken().subscribe(
      (token) => this.validate(token.request_token, user, password)
    );
  }
}
