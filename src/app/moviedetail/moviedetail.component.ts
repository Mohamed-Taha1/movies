import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {

  id:string="";
  moviedetail:any={}
  imageLink:string="https://image.tmdb.org/t/p/w500";
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) {


   this.id = _ActivatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {

      this._MoviesService.moviedetail(this.id).subscribe(
      {
        next:(response)=>
        {
          this.moviedetail=response

        }
      }
    )
    {

    }


  }

}
