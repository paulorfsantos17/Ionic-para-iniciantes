import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{MovieProvider} from '../../providers/movie/movie'

import {Observable} from 'rxjs/Observable'

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[ MovieProvider]
})
export class FeedPage {

	public nome_Usuario : string = 'Paulo Ricardo'
	
	public lista_movie : Observable <any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider:MovieProvider) {
  }

public soma (numberOne : number , numberTwo : number): number{
 return numberOne  + numberTwo

}
  ionViewDidLoad() {
    this.lista_movie =	this.movieProvider.getLatestMovies()
    
  }

}
