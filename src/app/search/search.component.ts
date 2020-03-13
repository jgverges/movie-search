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
  addItem:boolean= false;
  favorites: Array<{name:string,count:number}>= [{name:"",count:null},{name:"",count:null},{name:"",count:null}];

  constructor(private movieService: MovieService ) {}

  getMovies(title:any){
    this.hasResults = false;
    this.starOn= false;
    this.movieService.getByTitle(title.value).subscribe(data =>{
      if (data['Response']=="True"){
        this.movies=data['Search'];
        this.hasResults = true;
        this.addItem=false;
        this.incresasesFavorites(title);
          }
    });
  }

  getDetails(imdbID:string){
    this.movieService.getByImdbIDd(imdbID).subscribe(data =>{
      if (data['Response']=="True"){
        this.details=data;
        }
    });
  }

  addFavorite(title:any){  
    this.addItem=true;
    this.incresasesFavorites(title);
  }

  incresasesFavorites(title:any){
    let exist= false;
    if (this.hasResults)  {                           
        this.starOn=true; 
        this.favorites.forEach(item =>{ 
          if (item.name ==title.value){
            exist=true;
            item.count++;
          }
        })
        if(!exist && this.addItem) {
          this.favorites.push({name:title.value, count:1});
        } 
    }
    else return;
    this.favorites.sort(function (a, b) {
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;     
      return 0;
    });
  }



}