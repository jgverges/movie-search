import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/* owns */
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  movies: Movie[] ;
  details: Movie;
  title =  new FormControl('');
  hasResults:boolean = false;
  starOn:boolean= false;
  favorites: Array<{name:string,count:number}>= [{name:"casa",count:2},{name:"era",count:1},{name:"",count:null}];

  constructor(private movieService: MovieService ) {}

  getMovies(title){
    this.hasResults = false;
    this.starOn= false;
    this.movieService.getByTitle(title.value).subscribe(data =>{
      if (data['Response']=="True"){
        this.movies=data['Search'];
        this.hasResults = true;
        }
    });
  }
  getDetails(imdbID){
    this.movieService.getByImdbIDd(imdbID).subscribe(data =>{
      if (data['Response']=="True"){
        this.details=data;
        console.log(this.details.Title);
        }
    });
  }
  addFavorite(title){  
    let fav= title.value;//
    let exist= false;
    if (this.hasResults)  {                           
      this.starOn=true; 
      if (this.favorites){
        this.favorites.forEach(item =>{ console.log(item);
          if (item.name ==fav){
/*             item.count=item.count+1;
 */             exist=true;
                item.count++;
            return;
          }
        })
        if (exist){                 console.warn("exist");//

          //this.favorites.push({name:fav, count:1});
        }
/*         this.sortFavorites(this.favorites,this.count)
 */      }
      else{
        this.favorites.push({name:fav, count:1});
      }
    }
    this.favorites.sort(function (a, b) {
      if (a.count > b.count) {
        return -1;
      }
      if (a.count < b.count) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
    console.log(this.favorites);//

  }

  
  sortFavorites(data, count) {
    return data.sort(function (a, b) {
        var x = a[count],
        y = b[count];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        
    });
  };
}
