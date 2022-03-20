import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-tvdetail',
  templateUrl: './tvdetail.component.html',
  styleUrls: ['./tvdetail.component.scss']
})
export class TvdetailComponent implements OnInit {

  id:string="";
  tvobj:any={};
  imageLink:string="https://image.tmdb.org/t/p/w500";
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) {
    this.id = this._ActivatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {


    this._MoviesService.tvDetail(this.id).subscribe(
      {
        next:(response)=>
        {
          this.tvobj = response
        }
      }
    )

  }

}
