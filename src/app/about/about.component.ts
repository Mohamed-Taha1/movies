import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( private _MoviesService:MoviesService) { }
  getPersonDay:any[]=[];
  getPersonWeek:any[]=[];
  imageLink:string="https://image.tmdb.org/t/p/w500";

  ngOnInit(): void {
    this._MoviesService.getApis('person','day').subscribe(
      {
        next:(response)=>{

          this.getPersonDay=response.results

        }
      }
    )
    this._MoviesService.getApis('person','week').subscribe(
      {
        next:(response)=>{

        this.getPersonWeek=response.results

        }
      }
    )
  }

}
