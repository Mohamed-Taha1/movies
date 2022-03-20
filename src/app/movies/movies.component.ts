import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private _MoviesService:MoviesService ) { }
  getDayApis:any[]=[];
  getWeekApis:any[]=[];
  imageLink:string="https://image.tmdb.org/t/p/w500";
  ngOnInit(): void
  {
    this._MoviesService.getApis('movies','day').subscribe({
      next:(response)=>
      {
        this.getDayApis=response.results;
      }
    })
    this._MoviesService.getApis('movies','week').subscribe({
      next:(response)=>
      {
        this.getWeekApis=response.results;
        
      }
    })
  }

}
