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

  constructor(private movieService: MovieService ) {}

  getMovies(title){
    this.movieService.getByTitle(title.value).subscribe(data =>{
      console.log(data['Response']);
      if (data['Response']=="True"){
        this.movies=data['Search'];
        console.log("+++true")
        }
        else {
          console.log("- false")
        }
    });
  }
  alerta (){
    alert("up");
  }
}
