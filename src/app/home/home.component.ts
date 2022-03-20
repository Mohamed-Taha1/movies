
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
  getMovie: any []=[];
  getTv:any[]=[];
  getPrson:any[]=[];
  imageLink:string="https://image.tmdb.org/t/p/w500";
  ngOnInit(): void
  {

     this._MoviesService.getApis('movies','week').subscribe({
      next:(response)=>
      {
        this.getMovie=response.results.splice(0,10);

      }
    })
      this._MoviesService.getApis('tv','week').subscribe({
        next:(response)=>
        {
          this.getTv = response.results.splice(1,10);
        }
      })

      this._MoviesService.getApis('person','week').subscribe({
        next:(response)=>

        {
          this.getPrson = response.results.splice(0,10)
        }
      })

  }

  }


