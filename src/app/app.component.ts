import { Component, OnInit } from '@angular/core';
/* owns */
import { Movie } from './model/movie';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  movies:Movie[] = [];
  title = 'superman';

  constructor(private movieService: MovieService ) {}

  ngOnInit(){
    this.getMovies();
  }
  getMovies(){
    this.movieService.getByTitle(this.title).subscribe(data =>{
      console.log(data);
      this.movies = data;
    });
  }


}
