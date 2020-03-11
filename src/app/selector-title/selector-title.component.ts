import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/* owns */
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-selector-title',
  templateUrl: './selector-title.component.html',
  styleUrls: ['./selector-title.component.scss']
})
export class SelectorTitleComponent  {
  movies: Movie[] ;
  title =  new FormControl('');
  hasResults = false;
  favorites=[];

  constructor(private movieService: MovieService ) {}

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

  getDetails(movieDetails){
    console.log(movieDetails);
  }
}
