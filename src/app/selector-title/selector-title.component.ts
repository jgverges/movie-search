import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/* owns */
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';
import { DetailService } from '../service/detail.service';

@Component({
  selector: 'app-selector-title',
  templateUrl: './selector-title.component.html',
  styleUrls: ['./selector-title.component.scss']
})
export class SelectorTitleComponent  {
  movies: Movie[] ;
  details: Movie;
  title =  new FormControl('');
  hasResults = false;
  hasDetails=false;
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

  addFavorite(title){
    this.favorites.push(title.value);
  }

  getDetails(imdbID){
/*     hasDetails=false;
 */
    this.detailService.getByImdbIDd(imdbID).subscribe(data =>{
      if (data['Response']=="True"){
        this.details=data;
        console.log(this.details.Title);
        }
    });
  }
}
