import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/* owns */
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';
import { DetailService } from '../service/detail.service';


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
  favorites=[];

  constructor(private movieService: MovieService,
              private detailService:DetailService ) {}

  getMovies(title){
    this.hasResults = false;
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
    if (this.hasResults)  {
      this.favorites.push(title.value)
    };
  }

  getDetails(imdbID){
    this.detailService.getByImdbIDd(imdbID).subscribe(data =>{
      if (data['Response']=="True"){
        this.details=data;
        console.log(this.details.Title);
        }
    });
  }
}
