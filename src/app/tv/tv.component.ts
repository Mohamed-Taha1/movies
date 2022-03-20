import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  getTvDay:any[]=[];
  getTvweek:any[]=[];
  imageLink:string="https://image.tmdb.org/t/p/w500";
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {

    this._MoviesService.getApis('tv','day').subscribe({
      next:(response)=>{

        this.getTvDay=response.results;
      }
    })
    this._MoviesService.getApis('tv','week').subscribe({
      next:(response)=>{

        this.getTvweek=response.results;
      }
    })
  }

}
