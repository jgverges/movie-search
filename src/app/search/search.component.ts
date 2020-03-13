import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/* owns */
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';
import { Favorite} from '../model/favorite';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  movies: Movie[] ;
  details: Movie;
  title =  new FormControl('');
  hasResults = false;
  starOn=false;
  favorites:Favorite[]=[];

  constructor(private movieService: MovieService /* ,
              private detailService:DetailService  */) {}

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
  /* to do: json */
  sortJSON(data, key) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        
    });
  };

  addFavorite(title){  
    let fav=title.value;
    console.log(this.hasResults ,fav,this.favorites);   

    if (this.hasResults)  { this.starOn=true; ///////
      if (this.favorites){
        this.favorites.forEach(item =>{
          if (item.name ==fav){
            item.count=item.count+1;
            console.warn(item.count);
            return;
          }
          else{
            this.favorites.push({name:fav, count:1});
          }
          })
          console.log(this.favorites);
        }; 
      }
      else{
        this.favorites.push({name:fav, count:1});
      }
    }

  getDetails(imdbID){
    this.movieService.getByImdbIDd(imdbID).subscribe(data =>{
      if (data['Response']=="True"){
        this.details=data;
        console.log(this.details.Title);
        }
    });
  }
}
