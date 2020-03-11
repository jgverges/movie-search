import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
/* owns */
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-selector-title',
  templateUrl: './selector-title.component.html',
  styleUrls: ['./selector-title.component.scss']
})
export class SelectorTitleComponent implements OnInit {
  searchResult=0;
          seleccionado;
  movies: Movie[] ;
  title =  new FormControl('');
          borrar = [11111,2,3,4,555];

  constructor(private movieService: MovieService ) {}

  ngOnInit(){
    //this.getMovies(this.title);
  }
  getMovies(title){
    this.searchResult=0;
    this.movieService.getByTitle(title.value).subscribe(data =>{
      this.searchResult++;
      this.movies= data['Search'];
      console.log (this.movies);
  
     
    });
  }
}
