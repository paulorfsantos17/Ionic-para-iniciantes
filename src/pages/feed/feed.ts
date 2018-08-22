import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{MovieProvider} from '../../providers/movie/movie'


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
	
	public lista_movie = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider:MovieProvider) {
  }


public soma (numberOne : number , numberTwo : number): number{
 return numberOne  + numberTwo

}


  ionViewDidLoad() {

    this.movieProvider.getLatestMovies().subscribe(
     data=> {
       
          const response = (data as any);
          const resultFinal =   JSON.parse(response._body);
          this.lista_movie = resultFinal.results;
          console.log(this.lista_movie)
           
     }, error => {
       console.log (error)
     })


  }
  
    
  

}
