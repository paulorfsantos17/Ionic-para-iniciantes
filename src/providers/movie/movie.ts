import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
	private apiKey ="f26b0bb2942653de5ba63b265ebc98e3"
	 private baseApiPath="https://api.themoviedb.org/3"

  constructor(public http: Http) {

  }

  getLatestMovies():Observable<any>{
   return	this.http.get('https://api.themoviedb.org/3/movie/latest?language=pt-BR&api_key=f26b0bb2942653de5ba63b265ebc98e3')
   .map(response => response.json())
   
  }

}
